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
                {toasts.map(({ title, id, options, status }) => {
                    const styles = toastStatusStyles[status || "success"]

                    return (
                        <Toast
                            data-testid={
                                options?.["data-testid"] ||
                                (testid && `${testid}.Toast`)
                            }
                            className={
                                options?.className || (className && "Toast")
                            }
                            title={title}
                            id={options?.id || id}
                            ref={options?.ref}
                            toasterPosition={position}
                            options={{
                                duration:
                                    options?.duration ||
                                    toastsOptions?.duration ||
                                    3000,
                                icons: {
                                    left:
                                        options?.icons?.left ||
                                        styles?.iconLeft,
                                    close: options?.icons?.close || iconClose,
                                },
                                iconSizes: {
                                    left:
                                        options?.iconSizes?.left ||
                                        styles?.iconLeftSize,
                                    close:
                                        options?.iconSizes?.close ||
                                        iconCloseSize,
                                },
                                iconLeftColor:
                                    options?.iconLeftColor ||
                                    styles.iconLeftColor,
                                ref: options?.ref,
                                labelClose:
                                    options?.labelClose ||
                                    toastsOptions?.labelClose,
                                body: options?.body,
                                id: options?.id,
                                timerBackgroundColor:
                                    options?.timerBackgroundColor ||
                                    styles.borderColor,
                                ...toastsOptions,
                                ...options,
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
