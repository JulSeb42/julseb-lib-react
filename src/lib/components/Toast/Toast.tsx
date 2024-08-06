/*=============================================== Toast component ===============================================*/

import { forwardRef, useEffect, useCallback, useRef, useState } from "react"
import classNames from "classnames"
import { uuid } from "ts-utils-julseb"
import { Text, useToast, useMergeRefs } from "../.."
import { LibIcon } from "../LibIcon"
import { Close } from "../../icons"
import {
    StyledToast,
    TitleContainer,
    IconContainer,
    CloseButton,
    Timer,
} from "./styles"
import type { ILibToast } from "./types"

const CLOSE_ICON_SIZE = 24

/**
 * @description Returns a Toast component
 * @link https://documentation-components-react.vercel.app/components/toast
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop title: string
 * @prop id?: string
 * @prop status?: "success" | "error" | "warning" | "info" | "loading"
 * @prop options?: LibToastOptions
 * @prop toasterPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
 * @prop toastStyle?: { maxWidth?: string | number; border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }; backgroundColor?: Any color from the library; textColor?: Any color from the library; shadow?: LibShadows }
 *
 * @type LibToastOptions
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop body?: string | ReactChildren
 * @prop duration?: number
 * @prop icons?: { left?: string | JSX.Element; close?: string | JSX.Element }
 * @prop iconSizes?: { left?: number close?: number }
 * @prop iconLeftColor?: Any color from the library
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop labelClose?: string
 * @prop withTimer?: boolean
 * @prop timerBackgroundColor?: Any color from the library
 */
export const Toast = forwardRef<HTMLDivElement, ILibToast>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            title,
            id = uuid(),
            options,
            toastStyle,
            toasterPosition,
            role = "alert",
            iconBaseUrl,
            hideCloseButton,
            ...rest
        },
        ref
    ) => {
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
                $backgroundColor={toastStyle?.backgroundColor || "background"}
                $border={toastStyle?.border || { color: "gray-200" }}
                $shadow={toastStyle?.shadow}
                $textColor={toastStyle?.textColor || "font"}
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
                                baseUrl={iconBaseUrl}
                            />
                        </IconContainer>
                    )}

                    <Text
                        tag="h6"
                        as="p"
                        data-testid={testid && `${testid}.TitleContainer.Title`}
                        className={className && "Title"}
                    >
                        {title}
                    </Text>

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
                                aria-label={
                                    options?.labelClose || "Close toast"
                                }
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
                                                className={
                                                    className && "CloseIcon"
                                                }
                                            />
                                        )
                                    }
                                    size={
                                        options?.iconSizes?.close ||
                                        CLOSE_ICON_SIZE
                                    }
                                    color="currentColor"
                                    baseUrl={iconBaseUrl}
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
                        $duration={options?.duration || 3000}
                        $backgroundColor={
                            options?.timerBackgroundColor ||
                            toastStyle?.border?.color ||
                            "gray-200"
                        }
                    />
                )}
            </StyledToast>
        )
    }
)
