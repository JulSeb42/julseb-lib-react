/*=============================================== Tag types ===============================================*/

import type {
    LibAllColors,
    ILibBorder,
    LibComponentBase,
    LibFontSizes,
    LibIcon,
    ILibPadding,
    ILibRadius,
    LibSpacers,
} from "../../types"

interface ILibTagBase extends LibComponentBase<HTMLSpanElement> {
    backgroundColor?: LibAllColors
    textColor?: LibAllColors
    border?: ILibBorder
    padding?: ILibPadding
    borderRadius?: ILibRadius
    fontSize?: LibFontSizes
}

interface TagWithIcon extends ILibTagBase {
    icons?: {
        left?: LibIcon
        right?: LibIcon
    }
    iconSizes?: {
        left?: number
        right?: number
    }
    iconBaseUrl?: string
    gap?: LibSpacers
}

interface TagWithoutIcon extends ILibTagBase {
    icons?: undefined
    iconSizes?: never
    iconBaseUrl?: never
    gap?: never
}

export type ILibTag = TagWithIcon | TagWithoutIcon
