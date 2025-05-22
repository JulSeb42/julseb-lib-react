import type { CSSProperties } from "react"
import type {
	LibComponentBase,
	LibAllColorsAndOverlays,
	LibAllColors,
	LibTooltipPosition,
	LibSpacers,
	LibTooltipTrigger,
	ReactChildren,
} from "../../types"

export interface ILibTooltip extends LibComponentBase<HTMLDivElement> {
	tooltip: string | ReactChildren
	position?: LibTooltipPosition
	hideArrow?: boolean
	trigger?: LibTooltipTrigger
	backgroundColor?: LibAllColorsAndOverlays
	textColor?: LibAllColors
	offset?: LibSpacers
	tooltipStyles?: CSSProperties
}
