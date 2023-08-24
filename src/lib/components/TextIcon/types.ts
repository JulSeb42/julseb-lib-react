/*=============================================== TextIcon types ===============================================*/

import type { ElementType } from "react"

import type { LibAllColors, LibSpacers } from "../../types"
import type { TextProps, TextTag } from "../Text/types"

export type TextIconTag = Exclude<TextTag, "strong" | "em" | "ul" | "ol" | "dl">

export type TextIconProps = TextProps & {
    textAs?: ElementType
    tag?: TextIconTag
    icon: string
    iconColor?: LibAllColors
    iconSize?: number
    gap?: LibSpacers
}
