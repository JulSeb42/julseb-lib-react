/*=============================================== TextIcon types ===============================================*/

import type { ElementType } from "react"
import type {
    LibAllColors,
    LibIcon,
    LibSpacers,
    LibTextIconTag,
} from "../../types"
import type { TextProps } from "../Text/types"

export type TextIconProps = TextProps & {
    textAs?: ElementType
    tag?: LibTextIconTag
    icon: LibIcon
    iconColor?: LibAllColors
    iconSize?: number
    gap?: LibSpacers
}
