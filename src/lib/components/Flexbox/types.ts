/*=============================================== Flexbox types ===============================================*/

import type {
    LibComponentBase,
    AlignContent,
    AlignItems,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    JustifyItems,
    LibSpacers,
} from "../../types"

export interface FlexboxProps extends LibComponentBase<HTMLDivElement> {
    inline?: boolean
    flexDirection?: FlexDirection
    flexWrap?: FlexWrap
    justifyContent?: JustifyContent
    alignItems?: AlignItems
    justifyItems?: JustifyItems
    alignContent?: AlignContent
    gap?: LibSpacers
    columnGap?: LibSpacers
    rowGap?: LibSpacers
}
