/*=============================================== Tooltip types ===============================================*/

import type {
    LibComponentBase,
    LibAllColorsAndOverlays,
    LibAllColors,
    LibTooltipPosition,
    LibSpacers,
} from "../../types"

const tipTrigger = { hover: "hover", click: "click" } as const
export type TooltipTrigger = keyof typeof tipTrigger

export interface TooltipProps extends LibComponentBase<HTMLDivElement> {
    tooltip: string | JSX.Element
    position?: LibTooltipPosition
    withArrow?: boolean
    trigger?: TooltipTrigger
    backgroundColor?: LibAllColorsAndOverlays
    textColor?: LibAllColors
    offset?: LibSpacers
}
