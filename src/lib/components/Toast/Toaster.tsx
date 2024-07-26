/*=============================================== Toaster component ===============================================*/

import { forwardRef, type ElementType } from "react"
import { uuid } from "ts-utils-julseb"
import { Loader } from "../Loader"
import { Toast } from "./Toast"
import type {
    LibAllColors,
    LibIcon,
    LibToastOptions,
    LibToasterPosition,
    LibToast,
} from "../../types"
import { StyledToaster } from "./styles"

interface ILibToaster {
    "data-testid"?: string
    as?: ElementType
    className?: string
    toasts: Array<LibToast>
    toastsOptions?: Pick<
        LibToastOptions,
        "duration" | "labelClose" | "withTimer"
    >
    isOpen: boolean
    iconClose?: LibIcon
    iconCloseSize?: number
    position?: LibToasterPosition
}

const DEFAULT_ICON_SIZE = 16

const toastStatusStyles: {
    [key: string]: {
        backgroundColor: LibAllColors
        borderColor: LibAllColors
        iconLeftColor: LibAllColors
        iconLeft?: JSX.Element
        iconLeftSize: number
    }
} = {
    success: {
        backgroundColor: "success-50",
        borderColor: "success",
        iconLeftColor: "success",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    error: {
        backgroundColor: "danger-50",
        borderColor: "danger",
        iconLeftColor: "danger",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    warning: {
        backgroundColor: "warning-50",
        borderColor: "warning",
        iconLeftColor: "warning",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    info: {
        backgroundColor: "primary-50",
        borderColor: "primary",
        iconLeftColor: "primary",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    loading: {
        backgroundColor: "white",
        borderColor: "gray",
        iconLeftColor: "gray",
        iconLeftSize: DEFAULT_ICON_SIZE,
        iconLeft: <Loader size={DEFAULT_ICON_SIZE} borderWidth={2} />,
    },
}

/**
 * @description Returns a Toaster component
 * @link https://documentation-components-react.vercel.app/components/toast
 * @prop "data-testid"?: string
 * @prop as?: ElementType
 * @prop toasts: Array<{ title: string; id?: string; status?: "success" | "error" | "warning" | "info" | "loading"; options?: LibToastOptions }>
 * @prop toastsOptions?: { duration?: number; labelClose?: string; withTimer?: boolean }
 * @prop isOpen: boolean
 * @prop iconClose?: string | JSX.Element
 * @prop iconCloseSize?: number
 * @prop position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
 */

export const Toaster = forwardRef<HTMLDivElement, ILibToaster>(
    (
        {
            "data-testid": testid,
            as,
            className,
            toasts,
            toastsOptions,
            isOpen,
            iconClose,
            iconCloseSize,
            position = "bottom-right",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledToaster
                data-testid={testid}
                as={as}
                className={className}
                ref={ref}
                $isOpen={isOpen}
                $position={position}
                {...rest}
            >
                {toasts.map(toast => {
                    const styles = toastStatusStyles[status || "success"]

                    return (
                        <Toast
                            data-testid={
                                toast.options?.["data-testid"] ||
                                toast["data-testid"] ||
                                (testid && `${testid}.Toast`)
                            }
                            className={
                                toast.options?.className ||
                                toast.className ||
                                (className && "Toast")
                            }
                            title={toast.title}
                            id={toast.options?.id || toast.id}
                            ref={toast.options?.ref || toast.ref}
                            toasterPosition={position}
                            options={{
                                duration:
                                    toast.options?.duration ||
                                    toastsOptions?.duration ||
                                    3000,
                                icons: {
                                    left:
                                        toast.options?.icons?.left ||
                                        styles?.iconLeft,
                                    close:
                                        toast.options?.icons?.close ||
                                        iconClose,
                                },
                                iconSizes: {
                                    left:
                                        toast.options?.iconSizes?.left ||
                                        styles?.iconLeftSize,
                                    close:
                                        toast.options?.iconSizes?.close ||
                                        iconCloseSize,
                                },
                                iconLeftColor:
                                    toast.options?.iconLeftColor ||
                                    styles.iconLeftColor,
                                ref: toast.options?.ref || toast.ref,
                                labelClose:
                                    toast.options?.labelClose ||
                                    toastsOptions?.labelClose,
                                body: toast.options?.body,
                                id: toast.options?.id || toast.id,
                                timerBackgroundColor:
                                    toast.options?.timerBackgroundColor ||
                                    styles.borderColor,
                                ...toastsOptions,
                                ...toast.options,
                            }}
                            toastStyle={{
                                backgroundColor: styles.backgroundColor,
                                border: { color: styles.borderColor },
                            }}
                            key={uuid()}
                        />
                    )
                })}
            </StyledToaster>
        )
    }
)
