import { type FC } from "react"
import { clsx, genBgAllColors, genMaxWidth } from "../../utils"
import type { ILibHr } from "./types"

/**
 * Hr component for rendering a horizontal rule with custom color, width, and border radius.
 *
 * @component
 *
 * @example
 * <Hr maxWidth="lg" color="gray-200" isRounded />
 *
 * @extends HTMLHrElement
 *
 * @prop {"3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "none" | "px" | "full" | "dvw" | "dvh" | "lvw" | "lvh" | "svw" | "svh" | "screen" | "min" | "max" | "fit"} [maxWidth="full"] - Maximum width of the hr.
 * @prop {string} [color="gray-200"] - Background color of the hr.
 * @prop {boolean} [isRounded] - If true, the hr will have fully rounded borders.
 *
 * @returns {JSX.Element} The rendered Hr component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/hr
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
				"border-none w-full h-px",
				isRounded ? "rounded-full" : "rounded-none",
				genBgAllColors[color],
				genMaxWidth[maxWidth],
				"hr",
				className,
			)}
			{...rest}
		/>
	)
}
