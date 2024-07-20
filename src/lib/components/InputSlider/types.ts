/*=============================================== InputSlider types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { ILibInputBase } from "../InputComponents/types"

export interface ILibInputSlider
    extends InputHTMLAttributes<HTMLInputElement>,
        Omit<ILibInputBase, "inputVariant"> {
    type?: never
    showMinMax?: boolean
    showValue?: "hover" | "always" | "never"
    min?: number
    max?: number
    value?: number
}
