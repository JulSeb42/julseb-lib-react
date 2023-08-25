/*=============================================== Flexbox types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    AlignContent,
    AlignItems,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    JustifyItems,
    LibSpacers,
} from "../../types"

export interface FlexboxProps extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
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
