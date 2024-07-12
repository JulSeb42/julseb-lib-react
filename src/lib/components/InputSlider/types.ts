/*=============================================== InputSlider types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { ILibInputBase } from "../InputComponents/types"

interface ILibInputSliderBase
    extends InputHTMLAttributes<HTMLInputElement>,
        Omit<ILibInputBase, "inputVariant"> {
    type?: never
}

interface InputSliderWithMinMax extends ILibInputSliderBase {
    min: number
    max: number
    showMinMax?: boolean
}

interface InputSliderNoMinMax extends ILibInputSliderBase {
    min?: undefined
    max?: undefined
    showMinMax?: never
}

type InputSliderMinMax = InputSliderWithMinMax | InputSliderNoMinMax

type InputSliderWithValue = InputSliderMinMax & {
    value?: number
    showValue?: "hover" | "always" | "never"
}

type InputSliderNoValue = InputSliderMinMax & {
    value?: undefined
    showValue?: never
}

export type ILibInputSlider = InputSliderWithValue | InputSliderNoValue
