import { type FC } from "react"
import { clsx, genGap, genColGap } from "../../utils"
import type { ILibMasonry } from "./types"
import type { LibSpacers } from "../../types"

/**
 * Masonry component for displaying content in a responsive masonry grid layout.
 *
 * @component
 *
 * @example
 * <Masonry col={3} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Masonry>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="div"] - The HTML element or React component to render as the container.
 * @prop {React.RefObject<HTMLDivElement>} [props.ref] - Ref for the container element.
 * @prop {React.ReactNode[]} [props.children=[]] - The content to display in the masonry grid.
 * @prop {number} [props.col=4] - Number of columns in the masonry grid.
 * @prop {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"} [props.gap="lg"] - Gap between grid items.
 * @prop {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "0px"} [props.rowGap="lg"] - Vertical gap between grid items.
 * @prop {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"} [props.colGap="lg"] - Horizontal gap between columns.
 *
 * @returns {JSX.Element} The rendered Masonry component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/masonry
 */
export const Masonry: FC<ILibMasonry> = ({
	className,
	element = "div",
	ref,
	children,
	col = 4,
	gap = "lg",
	rowGap,
	colGap,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"columns-(--col-num)",
				genGap[gap],
				genMb[rowGap ?? gap],
				genColGap[colGap ?? gap],
				"masonry",
				className,
			)}
			style={{ ["--col-num" as any]: col }}
			{...rest}
		>
			{children}
		</Element>
	)
}

const genMb: Record<LibSpacers, string> = {
	"2xl": "[&>*]:mb-12",
	xl: "[&>*]:mb-8",
	lg: "[&>*]:mb-5",
	md: "[&>*]:mb-4",
	sm: "[&>*]:mb-3",
	xs: "[&>*]:mb-2",
	"2xs": "[&>*]:mb-1",
	"0px": "[&>*]:mb-0",
}
