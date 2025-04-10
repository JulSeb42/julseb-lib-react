import { forwardRef, useCallback, useRef } from "react"
import classNames from "classnames"
import { enableScroll, getRandomString, stringifyPx } from "@julseb-lib/utils"
import { useKeyPress, useClickOutside } from "../../"
import { roundIconSize, appendStyles } from "../../lib-utils"
import { Close } from "../../icons"
import { StyledModal, ButtonClose, ModalContent } from "./styles"
import type { ILibModal } from "./types"

const BUTTON_SIZE = 48
const BUTTON_LABEL = "Close modal"

/**
 * @description Returns a Modal component
 * @link https://documentation-components-react.vercel.app/components/modal
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop isOpen: boolean
 * @prop setIsOpen: Dispatch<SetStateAction<boolean>>
 * @prop disableEsc?: boolean
 * @prop contentWidth?: string | number
 * @prop contentId?: string
 * @prop hideCloseButton?: boolean
 * @prop buttonClose?: { icon?: string | JSX.Element; color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"; size?: number; variant?: "plain" | "ghost" | "transparent"; label?: string } => only if hideCloseButton is not set to true
 * @prop flexDirection?: CssFlexDirection
 * @prop flexWrap?: CssFlexWrap
 * @prop justifyContent?: CssJustifyContent
 * @prop alignItems?: CssAlignItems
 * @prop justifyItems?: CssJustifyItems
 * @prop alignContent?: CssAlignContent
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export const Modal = forwardRef<HTMLDivElement, ILibModal>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            isOpen,
            setIsOpen,
            disableEsc,
            buttonClose,
            hideCloseButton,
            contentWidth,
            contentId,
            ...rest
        },
        ref
    ) => {
        const handleClose = useCallback(() => {
            setIsOpen(false)
            enableScroll()
        }, [setIsOpen])

        useKeyPress(
            ["Escape"],
            useCallback(() => {
                if (isOpen && !disableEsc) handleClose()
            }, [disableEsc, handleClose, isOpen])
        )

        const el = useRef<HTMLDivElement>(null)

        useClickOutside(el, () => handleClose())

        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0] || randomClass

        appendStyles(`
            ${contentId ? `#${contentId}` : `.${withClass}`} {
                --modal-content-width: ${stringifyPx(contentWidth || "90%")};
            }
        `)

        return (
            <StyledModal
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, randomClass, {
                    Open: isOpen,
                })}
                {...rest}
            >
                <ModalContent
                    data-testid={testid && `${testid}.ModalContent`}
                    className={className && "ModalContent"}
                    ref={el}
                    id={contentId}
                >
                    {children}
                </ModalContent>

                {!hideCloseButton && (
                    <ButtonClose
                        data-testid={testid && `${testid}.ButtonClose`}
                        className={className && "ButtonClose"}
                        aria-label={buttonClose?.label || BUTTON_LABEL}
                        icon={
                            buttonClose?.icon || (
                                <Close
                                    size={roundIconSize(BUTTON_SIZE)}
                                    data-testid={
                                        testid && `${testid}.ButtonClose.Icon`
                                    }
                                    className={className && "ButtonCloseIcon"}
                                />
                            )
                        }
                        size={buttonClose?.size || BUTTON_SIZE}
                        color={buttonClose?.color || "white"}
                        variant={buttonClose?.variant || "transparent"}
                        onClick={handleClose}
                    />
                )}
            </StyledModal>
        )
    }
)
