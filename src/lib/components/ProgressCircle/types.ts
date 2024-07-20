/*=============================================== ProgressCircle types ===============================================*/

import type { LibComponentBase, LibAllColors, LibIcon } from "../../types"

interface ILibProgressCircleBase
    extends Exclude<LibComponentBase<SVGElement>, "as"> {
    value: number
    animated?: boolean
    color?: LibAllColors
}

interface ProgressCircleWithValue extends ILibProgressCircleBase {
    showValue?: true
    icon?: never
}

interface ProgressCircleWithIcon extends ILibProgressCircleBase {
    showValue?: never
    icon?: LibIcon
}

export type ILibProgressCircle =
    | ProgressCircleWithValue
    | ProgressCircleWithIcon
