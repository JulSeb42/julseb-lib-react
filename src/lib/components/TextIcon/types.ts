/*=============================================== TextIcon types ===============================================*/

import type { ElementType, CSSProperties } from "react"
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
    iconBaseUrl?: string
    gap?: LibSpacers
    containerStyle?: CSSProperties
}
