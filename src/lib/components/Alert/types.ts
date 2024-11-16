/*=============================================== Alert types ===============================================*/

import type {
    LibAllColors,
    ILibBorder,
    LibColorsShort,
    LibComponentBase,
    ILibPadding,
    ILibRadius,
    LibSpacers,
} from "../../types"

interface ILibAlertBase extends LibComponentBase<HTMLDivElement> {
    maxWidth?: number
    textColor?: LibAllColors
    padding?: ILibPadding
    borderRadius?: ILibRadius
    gap?: LibSpacers
}

interface AlertColorsShort extends ILibAlertBase {
    alertColor?: Exclude<LibColorsShort, "black" | "white">
    backgroundColor?: never
    border?: Omit<ILibBorder, "color">
}

interface AlertAllColors extends ILibAlertBase {
    alertColor?: never
    backgroundColor?: LibAllColors
    border?: ILibBorder
}

export type ILibAlert = AlertColorsShort | AlertAllColors
