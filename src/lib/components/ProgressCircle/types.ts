/*=============================================== ProgressCircle types ===============================================*/

import type { CSSProperties } from "react"
import type { LibComponentBase, LibAllColors, LibIcon } from "../../types"

interface ILibProgressCircleBase
    extends Exclude<LibComponentBase<SVGElement>, "as"> {
    value: number
    noAnimation?: boolean
    color?: LibAllColors
}

interface ProgressCircleWithValue extends ILibProgressCircleBase {
    showValue?: true
    icon?: never
    iconBaseUrl?: never
    containerStyle?: CSSProperties
}

interface ProgressCircleWithIcon extends ILibProgressCircleBase {
    showValue?: never
    icon?: LibIcon
    iconBaseUrl?: string
    containerStyle?: CSSProperties
}

export type ILibProgressCircle =
    | ProgressCircleWithValue
    | ProgressCircleWithIcon
