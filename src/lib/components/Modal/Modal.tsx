/*=============================================== Modal component ===============================================*/

import { forwardRef, useCallback, useRef } from "react"
import classNames from "classnames"
import { enableScroll } from "ts-utils-julseb"
import { useKeyPress, useClickOutside } from "../../"
import { roundIconSize } from "../../lib-utils"
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
 * @prop isOpen: boolean
 * @prop setIsOpen: Dispatch<SetStateAction<boolean>>
 * @prop disableEsc?: boolean
 * @prop contentWidth?: string | number
 * @prop hideCloseButton?: boolean
 * @prop buttonClose?: { icon?: string | JSX.Element; color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"; size?: number; variant?: "plain" | "ghost" | "transparent"; label?: string } => only if hideCloseButton is set to true
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

        return (
            <StyledModal
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Open: isOpen })}
                {...rest}
            >
                <ModalContent
                    data-testid={testid && `${testid}.ModalContent`}
                    className={className && "ModalContent"}
                    ref={el}
                    $width={contentWidth}
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
