import { useRef, type FC } from "react"
import { BiX } from "react-icons/bi"
import { enableScroll } from "@julseb-lib/utils"
import { useKeyPress, useClickOutside } from "../../hooks"
import { clsx } from "../../utils"
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
 * @prop {React.Ref<any>} [props.ref] - Ref to the modal element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the modal.
 * @prop {boolean} [props.isOpen] - Whether the modal is currently visible.
 * @prop {function} [props.setIsOpen] - Function to control the modal open/closed state.
 * @prop {boolean} [props.disableEsc] - Whether to disable closing the modal with the Escape key.
 * @prop {boolean} [props.hideCloseButton] - Whether to hide the close button in the modal.
 * @prop {React.ReactNode} [props.closeIcon=<BiX size={32} />] - Custom close icon for the modal.
 * @prop {string} [props.labelClose="Close modal"] - Aria label for the close button.
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
	...rest
}) => {
	const Element = element

	const el = useRef<HTMLDivElement>(null)

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

	return (
		<Element
			ref={ref}
			className={clsx(
				"top-0 left-0 z-999 fixed flex justify-center items-center bg-overlay-black-80 w-full h-svh",
				isOpen ? "visible opacity-100" : "hidden opacity-0",
				"modal",
				className,
			)}
			{...rest}
		>
			<button
				className={clsx(
					"top-2 right-2 z-10 absolute flex justify-center items-center size-12 text-white hover:text-gray-300 active:text-gray-100",
					"modal-close",
				)}
				onClick={() => setIsOpen(false)}
				aria-label={labelClose}
				role="button"
				type="button"
			>
				{closeIcon}
			</button>

			<div
				ref={el}
				className={clsx(
					"z-0 relative flex justify-center items-center w-full max-w-[90%]",
					"modal-content",
				)}
			>
				{children}
			</div>
		</Element>
	)
}
