/*=============================================== ProgressCircle types ===============================================*/

import type { CSSProperties } from "react"
import type { LibComponentBase, LibAllColors, LibIcon } from "../../types"

interface ILibProgressCircleBase
    extends Exclude<LibComponentBase<SVGElement>, "as"> {
    value: number
    noAnimation?: boolean
    color?: LibAllColors
    children?: never
    containerStyle?: CSSProperties
}

interface ProgressCircleWithValue extends ILibProgressCircleBase {
    showValue?: true
    icon?: never
    iconSize?: never
    iconBaseUrl?: never
}

interface ProgressCircleWithIcon extends ILibProgressCircleBase {
    showValue?: never
    icon?: LibIcon
    iconSize?: number
    iconBaseUrl?: string
}

export type ILibProgressCircle =
    | ProgressCircleWithValue
    | ProgressCircleWithIcon
