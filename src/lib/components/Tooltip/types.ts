import type { ReactElement } from "react"
import type {
	ClassNames,
	CSSProperties,
	LibAllColors,
	LibAllColorsAndOverlays,
	LibComponentBase,
	LibSpacers,
	LibTooltipPosition,
	LibTooltipTrigger,
} from "../../types"

export interface ILibTooltip extends LibComponentBase<HTMLSpanElement> {
	tooltip: string | ReactElement
	position?: LibTooltipPosition
	hideArrow?: boolean
	trigger?: LibTooltipTrigger
	backgroundColor?: LibAllColorsAndOverlays
	textColor?: LibAllColors
	offset?: LibSpacers
	tooltipClasses?: ClassNames
	tooltipStyle?: CSSProperties
}
