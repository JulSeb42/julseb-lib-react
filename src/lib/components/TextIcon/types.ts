/*=============================================== TextIcon types ===============================================*/

import type { ElementType } from "react"
import type {
    LibAllColors,
    LibIcon,
    LibSpacers,
    LibTextIconTag,
} from "../../types"
import type { ILibText } from "../Text/types"

export type ILibTextIcon = ILibText & {
    textAs?: ElementType
    tag?: LibTextIconTag
    icon: LibIcon
    iconColor?: LibAllColors
    iconSize?: number
    gap?: LibSpacers
}
