/*=============================================== InputSlider types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { InputBaseProps } from "../InputComponents/types"

interface InputSliderPropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        Omit<InputBaseProps, "inputVariant"> {
    type?: never
}

interface InputSliderWithMinMax extends InputSliderPropsBase {
    min: number
    max: number
    showMinMax?: boolean
}

interface InputSliderNoMinMax extends InputSliderPropsBase {
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

export type InputSliderProps = InputSliderWithValue | InputSliderNoValue
