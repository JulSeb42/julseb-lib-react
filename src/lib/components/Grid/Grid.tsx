import { type FC } from "react"
import {
	clsx,
	genGap,
	genRowGap,
	genColGap,
	genJustifyItems,
	genAlignItems,
} from "../../utils"
import type { ILibGrid } from "./types"

/**
 * Grid component for flexible CSS grid layouts.
 *
 * @component
 * @example
 * <Grid cols={3} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element="div"] - The HTML element or React component to render as the grid container.
 * @param {RefObject<HTMLDivElement>} [props.ref] - Ref for the grid container.
 * @param {ReactNode} props.children - Grid content.
 * @param {boolean} [props.inline] - Use inline-grid instead of grid.
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} [props.cols=1] - Number of columns (1-12).
 * @param {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.gap="0px"] - Gap between rows and columns (can use spacer tokens).
 * @param {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.rowGap="0px"] - Row gap (can use spacer tokens).
 * @param {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.colGap="0px"] - Column gap (can use spacer tokens).
 * @param {"start"|"end"|"end-safe"|"center"|"center-sage"|"space-between"|"space-around"|"space-evenly"|"stretch"|"baseline"|"normal"} [props.justifyContent="start"] - Justify content property.
 * @param {"start"|"end"|"end-safe"|"center"|"center-safe"|"stretch"|"normal"} [props.justifyItems="stretch"] - Justify items property.
 * @param {"normal"|"center"|"start"|"end"|"space-between"|"space-around"|"space-evenly"|"baseline"|"stretch"} [props.alignContent="start"] - Align content property.
 * @param {"start"|"end"|"end-safe"|"center"|"center-safe"|"baseline"|"baseline-start"|"stretch"} [props.alignItems="stretch"] - Align items property.
 * @param {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered grid container.
 *
 * @see https://documentation-components-react.vercel.app/layouts/grid
 */
export const Grid: FC<ILibGrid> = ({
	className,
	element = "div",
	ref,
	children,
	inline,
	cols = 1,
	gap = "0px",
	rowGap = "0px",
	colGap = "0px",
	justifyItems = "stretch",
	alignItems = "stretch",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				inline ? "inline-grid" : "grid",
				(genGridColumns as any)[cols],
				(genGap as any)[gap],
				(genRowGap as any)[rowGap],
				(genColGap as any)[colGap],
				// (genJustifyContent as any)[justifyContent],
				(genJustifyItems as any)[justifyItems],
				// (genAlignContent as any)[alignContent],
				(genAlignItems as any)[alignItems],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

const genGridColumns = {
	1: "grid-cols-1",
	2: "grid-cols-2",
	3: "grid-cols-3",
	4: "grid-cols-4",
	5: "grid-cols-5",
	6: "grid-cols-6",
	7: "grid-cols-7",
	8: "grid-cols-8",
	9: "grid-cols-9",
	10: "grid-cols-10",
	11: "grid-cols-11",
	12: "grid-cols-12",
}
