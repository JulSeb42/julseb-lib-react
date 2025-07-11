import { type FC } from "react"
import {
	clsx,
	genBgAllColors,
	genTextAllColor,
	genBorderRadius,
} from "../../utils"
import type { ILibBadge } from "./types"

/**
 * Badge component for displaying a colored label or status.
 *
 * @component
 *
 * @example
 * <Badge backgroundColor="primary" contentColor="white" borderRadius="full">New</Badge>
 *
 * @extends HTMLSpanElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the badge.
 * @prop {keyof JSX.IntrinsicElements} [props.element="span"] - The HTML element to render as the badge.
 * @prop {React.Ref<HTMLSpanElement>} [props.ref] - Ref to the badge element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the badge.
 * @prop {LibAllColors} [props.color="primary"] - Background color of the badge.
 * @prop {LibAllColors} [props.contentColor="white"] - Text color of the badge.
 * @prop {LibRadius} [props.borderRadius="full"] - Border radius of the badge.
 * @prop {any} [props.rest] - Additional props spread to the badge element.
 *
 * @returns {JSX.Element} The rendered Badge component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/badge
 */
export const Badge: FC<ILibBadge> = ({
	className,
	element = "span",
	ref,
	children,
	color = "primary",
	contentColor = "white",
	borderRadius = "full",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex justify-center items-center w-fit min-w-6 h-6",
				genBgAllColors[color],
				genTextAllColor[contentColor],
				genBorderRadius[borderRadius],
				"badge",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
