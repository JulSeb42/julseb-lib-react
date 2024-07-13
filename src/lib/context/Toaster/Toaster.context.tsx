/*=============================================== Toaster context ===============================================*/

import { createContext, useReducer, useContext } from "react"
import { uuid } from "ts-utils-julseb"
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
 * @description Returns a Context component for Toast
 * @link https://documentation-components-react.vercel.app/components/toast
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export function ToasterProviderWrapper({
    "data-testid": testid,
    className,
    children,
    toastOptions,
    position,
}: ILibToasterProvider) {
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

export function useToast() {
    return useContext(ToastContext) as ILibToasterContext
}
