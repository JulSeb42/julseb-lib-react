/*=============================================== InputCounter types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type {
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    DispatchState,
    LibButtonIconVariant,
} from "../../types"
import type { ILibInputBase } from "../InputComponents/types"

type ILibInputCounterBase = InputHTMLAttributes<HTMLInputElement> &
    ILibInputBase & {
        value: number
        setValue: DispatchState<number>
        min?: number
        max?: number
        step?: number
        type?: never
        buttonVariant?: LibButtonIconVariant
        icons?: {
            plus?: LibIcon
            minus?: LibIcon
        }
        iconSizes?: {
            plus?: number
            minus?: number
        }
        labelButtons?: {
            plus?: string
            minus?: string
        }
        showButtonTooltip?: boolean
    }

interface InputCounterInputEditable extends ILibInputCounterBase {
    inputNoEdit?: true | undefined
    inputBackground?: LibInputBackground
    inputVariant?: LibInputVariant
}

interface InputCounterInputNotEditable extends ILibInputCounterBase {
    inputNoEdit?: false
    inputBackground?: never
    inputVariant?: never
}

export type ILibInputCounter =
    | InputCounterInputEditable
    | InputCounterInputNotEditable
