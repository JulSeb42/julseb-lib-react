import { type FC } from "react"
import {
	clsx,
	genJustifyContent,
	genAlignItems,
	genAlignContent,
	genColGap,
	genGap,
	genJustifyItems,
	genRowGap,
} from "../../utils"
import type { ILibFlexbox } from "./types"

/**
 * Flexbox component for flexible layouts using CSS flexbox.
 *
 * @component
 * @example
 * <Flexbox flexDirection="row" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flexbox>
 *
 * @prop {object} props - Component props.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="div"] - The HTML element or React component to render as the flex container.
 * @prop {RefObject<HTMLDivElement>} [props.ref] - Ref for the flex container.
 * @prop {ReactNode} props.children - Flexbox content.
 * @prop {boolean} [props.inline] - Use inline-flex instead of flex.
 * @prop {"row"|"row-reverse"|"col"|"col-reverse"} [props.flexDirection="row"] - Flex direction.
 * @prop {"nowrap"|"wrap"|"wrap-reverse"} [props.flexWrap="nowrap"] - Flex wrap.
 * @prop {"start"|"end"|"end-safe"|"center"|"center-sage"|"space-between"|"space-around"|"space-evenly"|"stretch"|"baseline"|"normal"} [props.justifyContent="start"] - Justify content property.
 * @prop {"start"|"end"|"end-safe"|"center"|"center-safe"|"baseline"|"baseline-start"|"stretch"} [props.alignItems="stretch"] - Align items property.
 * @prop {"start"|"end"|"end-safe"|"center"|"center-safe"|"stretch"|"normal"} [props.justifyItems="stretch"] - Justify items property.
 * @prop {"normal"|"center"|"start"|"end"|"space-between"|"space-around"|"space-evenly"|"baseline"|"stretch"} [props.alignContent="normal"] - Align content property.
 * @prop {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.gap="0px"] - Gap between items (can use spacer tokens).
 * @prop {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.colGap="0px"] - Column gap (can use spacer tokens).
 * @prop {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.rowGap="0px"] - Row gap (can use spacer tokens).
 * @prop {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered flexbox container.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/flexbox
 */
export const Flexbox: FC<ILibFlexbox> = ({
	className,
	element = "div",
	ref,
	children,
	inline,
	flexDirection = "row",
	flexWrap = "nowrap",
	justifyContent = "start",
	alignItems = "stretch",
	justifyItems = "stretch",
	alignContent = "normal",
	gap = "0px",
	colGap = "0px",
	rowGap = "0px",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				inline ? "inline-flex" : "flex",
				genFlexWrap[flexWrap],
				genFlexDirection[flexDirection],
				genJustifyContent[justifyContent],
				genAlignItems[alignItems],
				genJustifyItems[justifyItems],
				genAlignContent[alignContent],
				genGap[gap],
				genColGap[colGap],
				genRowGap[rowGap],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

const genFlexDirection = {
	row: "flex-row",
	"row-reverse": "flex-row-reverse",
	col: "flex-col",
	"col-reverse": "flex-col-reverse",
}

const genFlexWrap = {
	nowrap: "flex-nowrap",
	wrap: "flex-wrap",
	"wrap-reverse": "flex-wrap-reverse",
}
