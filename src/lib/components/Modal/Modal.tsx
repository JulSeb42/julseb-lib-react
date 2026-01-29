import { useRef, useEffect, type FC } from "react"
import { BiX } from "react-icons/bi"
import { useKeyPress, useClickOutside } from "../../hooks"
import { clsx, enableScroll, disableScroll } from "../../utils"
import { useModalOpen } from "../../context"
import type { ILibModal } from "./types"

/**
 * Modal component for displaying overlay content with backdrop, close functionality, and keyboard navigation support.
 *
 * @component
 *
 * @example
 * <Modal
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 *   labelClose="Close dialog"
 * >
 *   <div className="bg-white p-6 rounded-lg">
 *     <h2>Modal Content</h2>
 *     <p>This is a modal dialog.</p>
 *   </div>
 * </Modal>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the modal container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the modal element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the modal.
 * @prop {boolean} [props.isOpen] - Whether the modal is currently visible.
 * @prop {function} [props.setIsOpen] - Function to control the modal open/closed state.
 * @prop {boolean} [props.disableEsc] - Whether to disable closing the modal with the Escape key.
 * @prop {boolean} [props.hideCloseButton] - Whether to hide the close button in the modal.
 * @prop {React.ReactNode} [props.closeIcon=<BiX size={32} />] - Custom close icon for the modal.
 * @prop {string} [props.labelClose="Close modal"] - Aria label for the close button.
 * @prop {boolean} [props.enableScrollWhenOpen] - Enable page scrolling when modal is open.
 *
 * @returns {JSX.Element} The rendered Modal component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/modal
 */
export const Modal: FC<ILibModal> = ({
	className,
	element = "div",
	ref,
	children,
	isOpen,
	setIsOpen,
	disableEsc,
	hideCloseButton,
	closeIcon = <BiX size={32} />,
	labelClose = "Close modal",
	enableScrollWhenOpen,
	...rest
}) => {
	const Element = element

	const el = useRef<HTMLDivElement>(null)

	const { setHasModalOpen } = useModalOpen()

	const handleClose = () => {
		if (isOpen) {
			setIsOpen(false)
			enableScroll()
		}
	}

	useClickOutside(el as any, handleClose)
	useKeyPress("Escape", () => {
		if (isOpen && !disableEsc) handleClose()
	})

	useEffect(() => {
		if (!enableScrollWhenOpen) {
			if (isOpen) {
				setHasModalOpen(true)
				disableScroll()
			} else {
				setHasModalOpen(false)
				enableScroll()
			}
		}
	}, [isOpen, enableScrollWhenOpen])

	return (
		<Element
			ref={ref}
			className={clsx(
				"top-0 left-0 z-999 fixed justify-center items-center bg-overlay-black-80 w-full h-svh",
				isOpen && "open",
				"hidden opacity-0 [&.open]:flex [&.open]:opacity-100",
				"modal",
				className,
			)}
			{...rest}
		>
			{!hideCloseButton && (
				<button
					className={clsx(
						"top-2 right-2 z-10 absolute flex justify-center items-center size-12 text-white hover:text-gray-300 active:text-gray-100",
						"modal-close",
					)}
					onClick={() => setIsOpen(false)}
					aria-label={labelClose}
					type="button"
				>
					{closeIcon}
				</button>
			)}

			<div
				ref={el}
				className={clsx(
					"z-0 relative flex justify-center items-center w-fit! max-w-[90%]",
					"modal-content",
				)}
			>
				{children}
			</div>
		</Element>
	)
}
