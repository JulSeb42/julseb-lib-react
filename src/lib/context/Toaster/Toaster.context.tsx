import { createContext, useReducer, useContext } from "react"
import { uuid } from "@julseb-lib/utils"
import { Toaster } from "../../components/Toast/Toaster"
import { toastReducer } from "./toast.reducer"
import type {
    LibToastStatus,
    LibToast,
    LibToastOptions,
    LibToasterPosition,
    ReactChildren,
} from "../../types"

interface ILibToasterContext {
    success: (title: string, options?: LibToastOptions) => void
    error: (title: string, options?: LibToastOptions) => void
    warning: (title: string, options?: LibToastOptions) => void
    info: (title: string, options?: LibToastOptions) => void
    loading: (title: string, options?: LibToastOptions) => void
    remove: (id: string) => void
}

export const ToastContext = createContext<ILibToasterContext>(null as any)

interface ILibToasterProvider {
    "data-testid"?: string
    className?: string
    children: ReactChildren
    toastOptions?: Pick<
        LibToastOptions,
        "duration" | "labelClose" | "withTimer"
    >
    position?: LibToasterPosition
}

const initialState = {
    toasts: [] as Array<LibToast>,
}

/**
 * ToasterProviderWrapper provides a context for managing toast notifications throughout the app.
 *
 * @component
 * @param {Object} props - ToasterProviderWrapper props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactChildren} props.children - Children components to wrap with the toaster context.
 * @param {{ duration?: number; labelClose?: string; withTimer?: boolean }} [props.toastOptions] - Default options for all toasts.
 * @param {"top-left" | "top-right" | "bottom-left" | "bottom-right"} [props.position] - Position of the toaster on the screen.
 * @returns {JSX.Element} The Toaster context provider with the Toaster component.
 *
 * @see https://documentation-components-react.vercel.app/components/toast
 */
export const ToasterProviderWrapper = ({
    "data-testid": testid,
    className,
    children,
    toastOptions,
    position,
}: ILibToasterProvider) => {
    const [state, dispatch] = useReducer(toastReducer, initialState)

    const addToast = (
        status: LibToastStatus,
        title: string,
        options?: LibToastOptions
    ) =>
        dispatch({
            type: "ADD_TOAST",
            payload: {
                id: uuid(),
                status,
                title,
                options: options || toastOptions,
            },
        })

    const success = (title: string, options?: LibToastOptions) =>
        addToast("success", title, options || toastOptions)

    const warning = (title: string, options?: LibToastOptions) =>
        addToast("warning", title, options || toastOptions)

    const error = (title: string, options?: LibToastOptions) =>
        addToast("error", title, options || toastOptions)

    const info = (title: string, options?: LibToastOptions) =>
        addToast("info", title, options || toastOptions)

    const loading = (title: string, options?: LibToastOptions) =>
        addToast("loading", title, options || toastOptions)

    const remove = (id: string) =>
        dispatch({
            type: "DELETE_TOAST",
            payload: id,
        })

    return (
        <ToastContext.Provider
            value={{
                success,
                error,
                warning,
                info,
                loading,
                remove,
            }}
        >
            {children}

            <Toaster
                toasts={state.toasts}
                isOpen={!!state.toasts.length}
                toastsOptions={toastOptions}
                data-testid={testid}
                className={className}
                position={position}
            />
        </ToastContext.Provider>
    )
}

/**
 * useToast is a hook for accessing the Toaster context and managing toast notifications.
 *
 * @function
 * @returns {ILibToasterContext} The toaster context with methods: success, error, warning, info, loading, remove.
 *
 * @see https://documentation-components-react.vercel.app/components/toast
 */
export const useToast = () => useContext(ToastContext) as ILibToasterContext
