/*=============================================== Badge types ===============================================*/

import type {
    LibAllColors,
    LibComponentBase,
    LibPaddingProps,
    LibRadiusProps,
    LibIcon,
} from "../../types"

interface BadgePropsBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
    borderRadius?: LibRadiusProps
    padding?: LibPaddingProps
    children?: never
}

interface BadgePropsIcon extends BadgePropsBase {
    icon?: LibIcon
    iconSize?: number
    number?: never
}

interface BadgePropsNumber extends BadgePropsBase {
    icon?: never
    iconSize?: never
    number?: number
}

export type BadgeProps = BadgePropsIcon | BadgePropsNumber
