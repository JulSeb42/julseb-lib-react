import type { FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Toast } from "./Toast"
import type { LibAllColors, LibToastStatus } from "../../types"
import { StyledToaster } from "./styles"
import type { ILibToaster } from "./types"

const DEFAULT_ICON_SIZE = 16

const toastStatusStyles: {
    [key: string]: {
        status: LibToastStatus
        timerColor: LibAllColors
        iconLeftColor: LibAllColors
        iconLeft?: JSX.Element
        iconLeftSize: number
    }
} = {
    success: {
        status: "success",
        timerColor: "success",
        iconLeftColor: "success",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    error: {
        status: "error",
        timerColor: "danger",
        iconLeftColor: "danger",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    warning: {
        status: "warning",
        timerColor: "warning",
        iconLeftColor: "warning",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
    info: {
        status: "info",
        timerColor: "primary",
        iconLeftColor: "primary",
        iconLeftSize: DEFAULT_ICON_SIZE,
    },
}

/**
 * Toaster component for displaying a stack of Toast notifications with customizable position, styles, and options.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Toaster props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<LibToast>} props.toasts - Array of toast objects to display.
 * @param {Object} [props.toastsOptions] - Default options for all toasts (duration, labelClose, withTimer, icons, iconSizes, iconLeftColor, iconsBaseUrl, etc.).
 * @param {boolean} props.isOpen - Whether the toaster is open and visible.
 * @param {"top-left" | "top-right" | "bottom-left" | "bottom-right"} [props.position="bottom-right"] - Position of the toaster on the screen.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Toaster component.
 *
 * @see https://documentation-components-react.vercel.app/components/toast
 * @example
 * <Toaster
 *   toasts={[
 *     { title: "Success", status: "success", options: { body: "Saved!" } },
 *     { title: "Error", status: "error", options: { body: "Failed!" } }
 *   ]}
 *   isOpen={true}
 *   position="top-right"
 * />
 */
export const Toaster: FC<ILibToaster> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    toasts,
    toastsOptions,
    isOpen,
    position = "bottom-right",
    ...rest
}) => {
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
                const styles = toastStatusStyles[toast.status || "success"]

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
                                toastsOptions?.iconLeftColor ||
                                styles.iconLeftColor,
                            ref: toast.options?.ref || toast.ref,
                            labelClose:
                                toast.options?.labelClose ||
                                toastsOptions?.labelClose,
                            body: toast.options?.body,
                            id: toast.options?.id || toast.id,
                            timerBackgroundColor:
                                toast.options?.timerBackgroundColor ||
                                styles.timerColor,
                            ...toastsOptions,
                            ...toast.options,
                        }}
                        status={toast.status}
                        key={uuid()}
                    />
                )
            })}
        </StyledToaster>
    )
}
