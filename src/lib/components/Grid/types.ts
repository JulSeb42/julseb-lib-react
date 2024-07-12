/*=============================================== Grid types ===============================================*/

import type {
    AlignContent,
    AlignItems,
    JustifyContent,
    JustifyItems,
    LibComponentBase,
    LibSpacers,
} from "../../types"

export interface ILibGrid extends LibComponentBase<HTMLDivElement> {
    inline?: boolean
    col?: number | string
    gap?: LibSpacers
    columnGap?: LibSpacers
    rowGap?: LibSpacers
    justifyItems?: JustifyItems
    alignItems?: AlignItems
    justifyContent?: JustifyContent
    alignContent?: AlignContent
}
