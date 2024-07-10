/*=============================================== Alert types ===============================================*/

import type {
    LibAllColors,
    LibBorderProps,
    LibColorsShort,
    LibComponentBase,
    LibPaddingProps,
    LibRadiusProps,
    LibSpacers,
} from "../../types"

interface AlertPropsBase extends LibComponentBase<HTMLDivElement> {
    maxWidth?: number
    textColor?: LibAllColors
    padding?: LibPaddingProps
    borderRadius?: LibRadiusProps
    gap?: LibSpacers
}

interface AlertColorsShort extends AlertPropsBase {
    alertColor?: Exclude<LibColorsShort, "black" | "white">
    backgroundColor?: never
    border?: Omit<LibBorderProps, "color">
}

interface AlertAllColors extends AlertPropsBase {
    alertColor?: never
    backgroundColor?: LibAllColors
    border?: LibBorderProps
}

export type AlertProps = AlertColorsShort | AlertAllColors
