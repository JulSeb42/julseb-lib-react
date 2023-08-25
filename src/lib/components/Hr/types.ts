/*=============================================== Hr types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { LibAllColors, LibMarginProps } from "../../types"

export interface HrProps extends HTMLAttributes<HTMLHRElement> {
    "data-testid"?: string
    as?: ElementType
    height?: number
    maxWidth?: string | number
    color?: LibAllColors
    margin?: LibMarginProps
    isRounded?: boolean
}
