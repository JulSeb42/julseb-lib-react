/*=============================================== Hr types ===============================================*/

import type { LibAllColors, LibComponentBase, ILibMargin } from "../../types"

export interface ILibHr extends LibComponentBase<HTMLHRElement> {
    height?: number
    maxWidth?: string | number
    color?: LibAllColors
    margin?: ILibMargin
    isRounded?: boolean
    children?: never
}
