import type { ReactElement } from "react"
import type {
	ClassNames,
	LibAllColors,
	LibAllColorsAndOverlays,
	LibComponentBase,
	LibSpacers,
	LibTooltipPosition,
	LibTooltipTrigger,
} from "../../types"

export interface ILibTooltip extends LibComponentBase<HTMLDivElement> {
	tooltip: string | ReactElement
	position?: LibTooltipPosition
	hideArrow?: boolean
	trigger?: LibTooltipTrigger
	backgroundColor?: LibAllColorsAndOverlays
	textColor?: LibAllColors
	offset?: LibSpacers
	tooltipClasses?: ClassNames
}
