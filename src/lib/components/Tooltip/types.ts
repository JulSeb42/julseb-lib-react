/*=============================================== Tooltip types ===============================================*/

import type {
    LibComponentBase,
    LibAllColorsAndOverlays,
    LibAllColors,
    LibTooltipPosition,
    LibSpacers,
    LibTooltipTrigger,
} from "../../types"

export interface TooltipProps extends LibComponentBase<HTMLDivElement> {
    tooltip: string | JSX.Element
    position?: LibTooltipPosition
    withArrow?: boolean
    trigger?: LibTooltipTrigger
    backgroundColor?: LibAllColorsAndOverlays
    textColor?: LibAllColors
    offset?: LibSpacers
}
