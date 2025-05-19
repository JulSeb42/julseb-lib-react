import { useCallback, useRef, type FC } from "react"
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
 * Modal component for displaying content in a dialog overlay with flexible close options, width, and layout.
 *
 * @component
 * @extends ILibFlexbox
 * @param {Object} props - Modal props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {ReactNode} [props.children] - Modal content.
 * @param {string} [props.className] - Additional class names.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Dispatch<React.SetStateAction<boolean>>} props.setIsOpen - Setter for modal open state.
 * @param {boolean} [props.disableEsc] - Disable closing the modal with the Escape key.
 * @param {string|number} [props.contentWidth] - Width of the modal content.
 * @param {string} [props.contentId] - ID for the modal content container.
 * @param {boolean} [props.hideCloseButton] - Hide the close button.
 * @param {{ icon?: string | JSX.Element; color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"; size?: number; variant?: "plain" | "ghost" | "transparent"; label?: string }} [props.buttonClose] - Customization for the close button (only if hideCloseButton is not set to true).
 * @param {CssFlexDirection} [props.flexDirection] - Flex direction.
 * @param {CssFlexWrap} [props.flexWrap] - Flex wrap.
 * @param {CssJustifyContent} [props.justifyContent] - Justify content.
 * @param {CssAlignItems} [props.alignItems] - Align items.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between elements.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }} [props.padding] - Padding for the modal container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Modal component.
 *
 * @see https://documentation-components-react.vercel.app/components/modal
 * @example
 * <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
 *   <h2>Modal title</h2>
 *   <p>Modal content goes here.</p>
 * </Modal>
 */
export const Modal: FC<ILibModal> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
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
