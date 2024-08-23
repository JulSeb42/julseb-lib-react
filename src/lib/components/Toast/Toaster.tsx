/*=============================================== Toaster component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { Loader } from "../Loader"
import { Toast } from "./Toast"
import type { LibAllColors } from "../../types"
import { StyledToaster } from "./styles"
import type { ILibToaster } from "./types"

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
 * @prop data-testid?: string
 * @prop as?: ElementType
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
                                        toastsOptions?.icons?.close,
                                },
                                iconSizes: {
                                    left:
                                        toast.options?.iconSizes?.left ||
                                        styles?.iconLeftSize,
                                    close:
                                        toast.options?.iconSizes?.close ||
                                        toastsOptions?.iconSizes?.close,
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
