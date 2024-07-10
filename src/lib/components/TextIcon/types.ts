/*=============================================== TextIcon types ===============================================*/

import type { ElementType } from "react"
import type { LibAllColors, LibIcon, LibSpacers } from "../../types"
import type { TextProps, LibAllTextTags } from "../Text/types"

export type TextIconTag = Exclude<
    LibAllTextTags,
    "strong" | "em" | "ul" | "ol" | "dl"
>

export type TextIconProps = TextProps & {
    textAs?: ElementType
    tag?: TextIconTag
    icon: LibIcon
    iconColor?: LibAllColors
    iconSize?: number
    gap?: LibSpacers
}
