import { type FC } from "react"
import {} from "@julseb-lib/utils"
import { clsx, genBgAllColors, genMaxWidth } from "../../utils"
import type { ILibHr } from "./types"

/**
 * Hr component for rendering a horizontal rule with custom color, width, and border radius.
 *
 * @component
 * @link https://documentation-components-react.vercel.app/components/hr
 * @extends HTMLHrElement
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element="hr"] - The HTML element or React component to render as the hr.
 * @param {React.RefObject<HTMLHrElement>} [props.ref] - Ref for the hr element.
 * @param {"3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "none" | "px" | "full" | "dvw" | "dvh" | "lvw" | "lvh" | "svw" | "svh" | "screen" | "min" | "max" | "fit"} [props.maxWidth="full"] - Maximum width of the hr.
 * @param {string} [props.color="gray-200"] - Background color of the hr.
 * @param {boolean} [props.isRounded] - If true, the hr will have fully rounded borders.
 * @param {object} [props.rest] - Additional props spread to the hr element.
 * @returns {ReactElement} The rendered Hr component.
 */
export const Hr: FC<ILibHr> = ({
	className,
	element = "hr",
	ref,
	maxWidth = "full",
	color = "gray-200",
	isRounded,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"border-none h-[1px]",
				isRounded ? "rounded-full" : "rounded-none",
				genBgAllColors[color],
				genMaxWidth[maxWidth],
				className,
			)}
			{...rest}
		/>
	)
}
