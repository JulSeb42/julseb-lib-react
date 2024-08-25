/*=============================================== InputSlider types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { ILibInputBase } from "../InputComponents/types"

export type ILibInputSlider = InputHTMLAttributes<HTMLInputElement> &
    Omit<ILibInputBase, "inputVariant" | "iconBaseUrl"> & {
        type?: never
        showMinMax?: boolean
        showValue?: "hover" | "always" | "never"
        min?: number
        max?: number
        value?: number
    }
