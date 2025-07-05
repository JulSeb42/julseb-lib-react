import { type FC } from "react"
import { BiX } from "react-icons/bi"
import { Text } from "../Text"
import { Loader } from "../Loader"
import { clsx, genTextColorHover } from "../../utils"
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
 * @prop {React.Ref<any>} [props.ref] - Ref to the toast element.
 * @prop {React.ReactNode} [props.body] - Body content to display below the title.
 * @prop {React.ReactNode} [props.title] - Title content to display in the toast header.
 * @prop {"success" | "error" | "warning" | "info" | "loading"} [props.status="success"] - Status type that determines the toast appearance and behavior.
 * @prop {boolean} [props.hideCloseButton] - Whether to hide the close button in the toast.
 * @prop {function} [props.closeToast] - Function to call when the close button is clicked.
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
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative p-3 border rounded-lg w-full max-w-[400px] overflow-hidden text-black",
				genToastColors[status],
				className,
			)}
			{...rest}
		>
			{!hideCloseButton || status === "loading" ? (
				<div className="flex justify-between gap-2 w-full">
					{status === "loading" ? (
						<span className="inline-flex items-center gap-2">
							<Text tag="strong">{title}</Text>
							<Loader className="border-2 size-4" color="gray" />
						</span>
					) : (
						<Text tag="strong">{title}</Text>
					)}

					{!hideCloseButton && (
						<button
							onClick={closeToast}
							className={clsx(
								"inline-flex justify-center items-center size-6",
								genTextColorHover["gray"],
							)}
						>
							<BiX size={20} />
						</button>
					)}
				</div>
			) : (
				<Text tag="strong">{title}</Text>
			)}

			{typeof body === "string" ? <Text>{body}</Text> : body}
		</Element>
	)
}
