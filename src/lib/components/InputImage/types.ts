/*=============================================== InputImage types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { LibIcon, ILibRadius } from "../../types"
import type { ILibInputBase } from "../InputComponents/types"

export type ILibInputImage = InputHTMLAttributes<HTMLInputElement> &
    Omit<ILibInputBase, "inputBackground" | "inputVariant"> & {
        id: string
        value: string
        width?: string | number
        height?: string | number
        size?: string | number
        borderRadius?: ILibRadius
        icons?: {
            empty?: LibIcon
            hover?: LibIcon
        }
        iconSizes?: {
            empty?: number
            hover?: number
        }
        iconBaseUrl?: string
        type?: never
    }
