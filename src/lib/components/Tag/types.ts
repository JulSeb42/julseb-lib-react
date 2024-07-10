/*=============================================== Tag types ===============================================*/

import type {
    LibAllColors,
    LibBorderProps,
    LibComponentBase,
    LibFontSizes,
    LibIcon,
    LibPaddingProps,
    LibRadiusProps,
    LibSpacers,
} from "../../types"

interface TagPropsBase extends LibComponentBase<HTMLSpanElement> {
    backgroundColor?: LibAllColors
    textColor?: LibAllColors
    border?: LibBorderProps
    padding?: LibPaddingProps
    borderRadius?: LibRadiusProps
    fontSize?: LibFontSizes
}

interface TagPropsWithIcon extends TagPropsBase {
    icons?: {
        left?: LibIcon
        right?: LibIcon
    }
    iconSizes?: {
        left?: number
        right?: number
    }
    gap?: LibSpacers
}

interface TagPropsNoIcon extends TagPropsBase {
    icons?: undefined
    iconSizes?: never
    gap?: never
}

export type TagProps = TagPropsWithIcon | TagPropsNoIcon
