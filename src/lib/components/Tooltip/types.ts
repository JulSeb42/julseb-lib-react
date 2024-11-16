/*=============================================== Tooltip types ===============================================*/

import type { CSSProperties } from "react"
import type {
    LibComponentBase,
    LibAllColorsAndOverlays,
    LibAllColors,
    LibTooltipPosition,
    LibSpacers,
    LibTooltipTrigger,
} from "../../types"

export interface ILibTooltip extends LibComponentBase<HTMLDivElement> {
    tooltip: string | JSX.Element
    position?: LibTooltipPosition
    hideArrow?: boolean
    trigger?: LibTooltipTrigger
    backgroundColor?: LibAllColorsAndOverlays
    textColor?: LibAllColors
    offset?: LibSpacers
    tooltipStyles?: CSSProperties
}
