/*=============================================== Hr types ===============================================*/

import type {
    LibAllColors,
    LibComponentBase,
    LibMarginProps,
} from "../../types"

export interface HrProps extends LibComponentBase<HTMLHRElement> {
    height?: number
    maxWidth?: string | number
    color?: LibAllColors
    margin?: LibMarginProps
    isRounded?: boolean
}
