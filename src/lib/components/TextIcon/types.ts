import type { ElementType, CSSProperties } from "react"
import type {
    LibAllColors,
    LibIcon,
    LibSpacers,
    LibTextIconTag,
} from "../../types"
import type { ILibText } from "../Text/types"

export type ILibTextIcon = Omit<ILibText, "tag"> & {
    icon: LibIcon
    iconColor?: LibAllColors
    iconSize?: number
    textAs?: ElementType
    tag?: LibTextIconTag
    iconBaseUrl?: string
    gap?: LibSpacers
    containerStyle?: CSSProperties
}
