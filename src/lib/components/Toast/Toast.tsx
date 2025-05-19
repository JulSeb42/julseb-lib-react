import { useEffect, useCallback, useRef, useState, type FC } from "react"
import classNames from "classnames"
import { uuid } from "@julseb-lib/utils"
import { Text, useToast, useMergeRefs } from "../.."
import { LibIcon } from "../LibIcon"
import { Close } from "../../icons"
import {
    StyledToast,
    TitleContainer,
    IconContainer,
    CloseButton,
    Timer,
    Title,
} from "./styles"
import type { ILibToast } from "./types"

const CLOSE_ICON_SIZE = 24

/**
 * Toast component for displaying a notification message with customizable title, body, icons, status, timer, and close button.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Toast props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.title - Title of the toast.
 * @param {"top-left" | "top-right" | "bottom-left" | "bottom-right"} [props.toasterPosition] - Position of the toast on the screen.
 * @param {{ maxWidth?: string | number; border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: string }; backgroundColor?: string; textColor?: string; shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" }} [props.toastStyle] - Custom style for the toast.
 * @param {boolean} [props.hideCloseButton] - If true, hides the close button.
 * @param {"success" | "error" | "warning" | "info"} [props.status] - Status of the toast for styling.
 * @param {LibToastOptions} [props.options] - Additional toast options (body, duration, icons, etc.).
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Toast component.
 *
 * @see https://documentation-components-react.vercel.app/components/toast
 * @example
 * <Toast
 *   title="Success"
 *   status="success"
 *   options={{
 *     body: "Your changes have been saved.",
 *     duration: 3000,
 *     icons: { left: "check" },
 *     withTimer: true
 *   }}
 * />
 */
export const Toast: FC<ILibToast> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    title,
    id = uuid(),
    options,
    maxWidth = 400,
    toasterPosition,
    role = "alert",
    hideCloseButton,
    status,
    ...rest
}) => {
    const toast = useToast()
    const [isOpen, setIsOpen] = useState(true)

    const remove = useCallback(() => {
        setIsOpen(false)
        setTimeout(() => toast.remove(id), 200)
    }, [id, toast])

    const el = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const duration = options?.duration

        if (duration) {
            setTimeout(() => {
                remove()
            }, duration)
        }
    }, [options?.duration, remove])

    const body = children || options?.body

    return (
        <StyledToast
            data-testid={testid}
            ref={useMergeRefs([ref, el])}
            as={as}
            role={role}
            id={id}
            className={classNames(className, { Open: isOpen })}
            $status={status}
            $maxWidth={maxWidth}
            $toasterPosition={toasterPosition}
            {...rest}
        >
            <TitleContainer
                data-testid={testid && `${testid}.TitleContainer`}
                className={className && "TitleContainer"}
            >
                {options?.icons?.left && (
                    <IconContainer
                        data-testid={
                            testid &&
                            `${testid}.TitleContainer.IconContainerLeft`
                        }
                        className={className && "IconContainerLeft"}
                    >
                        <LibIcon
                            data-testid={
                                testid &&
                                `${testid}.TitleContainer.IconContainerLeft.Icon`
                            }
                            className={className && "Icon"}
                            icon={options.icons.left}
                            size={options.iconSizes?.left || 16}
                            color={options?.iconLeftColor}
                            baseUrl={options?.iconsBaseUrl}
                        />
                    </IconContainer>
                )}

                <Title
                    data-testid={testid && `${testid}.TitleContainer.Title`}
                    className={className && "Title"}
                    tag="strong"
                >
                    {title}
                </Title>

                {!hideCloseButton && (
                    <IconContainer
                        data-testid={
                            testid &&
                            `${testid}.TitleContainer.IconContainerRight`
                        }
                        className={className && "IconContainerRight"}
                    >
                        <CloseButton
                            onClick={remove}
                            aria-label={options?.labelClose || "Close toast"}
                            data-testid={
                                testid &&
                                `${testid}.TitleContainer.IconContainerRight.CloseButton`
                            }
                            className={className && "CloseButton"}
                        >
                            <LibIcon
                                data-testid={
                                    testid &&
                                    `${testid}.TitleContainer.IconContainerRight.CloseButton.Icon`
                                }
                                className={className && "CloseIcon"}
                                icon={
                                    options?.icons?.close || (
                                        <Close
                                            size={CLOSE_ICON_SIZE}
                                            data-testid={
                                                testid &&
                                                `${testid}.TitleContainer.IconContainerRight.CloseButton.Icon`
                                            }
                                            className={className && "CloseIcon"}
                                        />
                                    )
                                }
                                size={
                                    options?.iconSizes?.close || CLOSE_ICON_SIZE
                                }
                                color="currentColor"
                                baseUrl={options?.iconsBaseUrl}
                            />
                        </CloseButton>
                    </IconContainer>
                )}
            </TitleContainer>

            {body && (
                <Text
                    data-testid={testid && `${testid}.Body`}
                    className={className && "Body"}
                >
                    {body}
                </Text>
            )}

            {options?.withTimer && (
                <Timer
                    data-testid={testid && `${testid}.Timer`}
                    className={className && "Timer"}
                    $duration={options?.duration ?? 3000}
                    $backgroundColor={
                        options?.timerBackgroundColor ?? "success-200"
                    }
                />
            )}
        </StyledToast>
    )
}
