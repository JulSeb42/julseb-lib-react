import { type FC } from "react"
import {
	clsx,
	genBgAllColors,
	genTextAllColor,
	genBorderRadius,
	genBorderAllColors,
} from "../../utils"
import type { ILibTag } from "./types"

/**
 * Tag component for displaying labeled content with customizable colors, variants, and styling options.
 *
 * @component
 *
 * @example
 * <Tag color="primary" variant="plain">
 *   New Feature
 * </Tag>
 * <Tag color="success" variant="outline" borderRadius="md">
 *   Approved
 * </Tag>
 *
 * @extends HTMLSpanElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tag container.
 * @prop {React.ElementType} [props.element="span"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the tag element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the tag.
 * @prop {LibAllColors} [props.color="primary"] - Background or border color of the tag.
 * @prop {LibAllColors} [props.contentColor] - Text color of the tag content.
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "full"} [props.borderRadius="full"] - Border radius size of the tag.
 * @prop {"plain" | "outline"} [props.variant="plain"] - Visual style variant of the tag.
 *
 * @returns {JSX.Element} The rendered Tag component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tag
 */
export const Tag: FC<ILibTag> = ({
	className,
	element = "span",
	ref,
	children,
	color = "primary",
	contentColor,
	borderRadius = "full",
	variant = "plain",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex items-center self-start gap-2 px-4 py-1",
				genBorderRadius[borderRadius],
				variant === "plain" && [
					genBgAllColors[color],
					color === "white"
						? "text-primary"
						: genTextAllColor[contentColor ?? "white"],
				],
				variant === "outline" && [
					"border",
					genBorderAllColors[color],
					genTextAllColor[contentColor || color],
				],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
