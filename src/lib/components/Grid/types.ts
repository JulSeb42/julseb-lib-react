/*=============================================== Grid types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    AlignContent,
    AlignItems,
    JustifyContent,
    JustifyItems,
    LibSpacers,
} from "../../types"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
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
