import { type FC } from "react"
import { Text } from "../Text"
import { clsx, genBgColor50, genBorderColorShort } from "../../utils"
import type { ILibAlert } from "./types"

/**
 * Alert component for displaying informational messages with customizable colors and styling.
 *
 * @component
 *
 * @example
 * <Alert color="success">
 *   Operation completed successfully!
 * </Alert>
 * <Alert color="danger">
 *   <Text>Error occurred</Text>
 *   <Text>Please try again</Text>
 * </Alert>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the alert container.
 * @prop {React.ElementType} [props.element=typeof children === "string" ? Text : "div"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the alert element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the alert.
 * @prop {LibAllColors} [props.color="primary"] - Color theme for the alert background and border.
 *
 * @returns {JSX.Element} The rendered Alert component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/alert
 */
export const Alert: FC<ILibAlert> = ({
	children,
	className,
	element = typeof children === "string" ? Text : "div",
	ref,
	color = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col gap-2 px-4 py-2 border rounded-lg w-full max-w-[400px]",
				genBgColor50[color],
				genBorderColorShort[color],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
