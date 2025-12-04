import { type FC } from "react"
import { BiX } from "react-icons/bi"
import { Text } from "../Text"
import { Loader } from "../Loader"
import { clsx, genRingColor, genTextColorHover } from "../../utils"
import { genToastColors } from "./utils"
import type { ILibToast } from "./types"

/**
 * Toast component for displaying temporary notification messages with different status types and optional close functionality.
 *
 * @component
 *
 * @example
 * <Toast
 *   title="Success!"
 *   body="Your changes have been saved."
 *   status="success"
 *   closeToast={handleClose}
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the toast container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the toast element.
 * @prop {React.ReactNode} [props.body] - Body content to display below the title.
 * @prop {React.ReactNode} [props.title] - Title content to display in the toast header.
 * @prop {"success" | "error" | "warning" | "info" | "loading"} [props.status="success"] - Status type that determines the toast appearance and behavior.
 * @prop {boolean} [props.hideCloseButton] - Whether to hide the close button in the toast.
 * @prop {function} [props.closeToast] - Function to call when the close button is clicked.
 * @prop {React.ReactElement} [props.iconClose] - Custom icon for the close button.
 * @prop {1 | 2 | 3} [props.loaderVariant] - Variant of the loader shown when status is "loading".
 *
 * @returns {JSX.Element} The rendered Toast component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/toast
 */
export const Toast: FC<ILibToast> = ({
	className,
	element = "div",
	ref,
	body,
	title,
	status = "success",
	hideCloseButton,
	closeToast,
	iconClose,
	loaderVariant,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative p-3 border rounded-lg w-full max-w-[400px] overflow-hidden text-font",
				genToastColors[status],
				"toast",
				className,
			)}
			{...rest}
		>
			{!hideCloseButton || status === "loading" ? (
				<div className="flex justify-between gap-2 w-full toast-content-wrapper">
					{status === "loading" ? (
						<span className="inline-flex items-center gap-2 toast-title-wrapper">
							<Text tag="strong" className="toast-title">
								{title}
							</Text>
							<Loader
								className="border-2 size-4 toast-loader"
								color="gray"
								variant={loaderVariant}
							/>
						</span>
					) : (
						<Text tag="strong" className="toast-title">
							{title}
						</Text>
					)}

					{!hideCloseButton && (
						<button
							onClick={closeToast}
							className={clsx(
								"inline-flex justify-center items-center rounded-md outline-none size-6",
								genTextColorHover["gray"],
								genRingColor["gray"],
								"toast-close-button",
							)}
						>
							{iconClose ?? (
								<BiX size={20} className="toast-close-icon" />
							)}
						</button>
					)}
				</div>
			) : (
				<Text tag="strong" className="toast-title">
					{title}
				</Text>
			)}

			{typeof body === "string" ? (
				<Text className="toast-body">{body}</Text>
			) : (
				body
			)}
		</Element>
	)
}
