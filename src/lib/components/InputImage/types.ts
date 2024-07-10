/*=============================================== InputImage types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { LibIcon, LibRadiusProps } from "../../types"
import type { InputBaseProps } from "../InputComponents/types"

export interface InputImageProps
    extends InputHTMLAttributes<HTMLInputElement>,
        Omit<InputBaseProps, "inputBackground" | "inputVariant"> {
    id: string
    value: string
    width?: string | number
    height?: string | number
    borderRadius?: LibRadiusProps
    icons?: {
        empty?: LibIcon
        hover?: LibIcon
    }
    iconSizes?: {
        empty?: number
        hover?: number
    }
    children?: never
    type?: never
}
