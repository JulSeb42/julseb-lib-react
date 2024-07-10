/*=============================================== InputCounter types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type {
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    DispatchState,
    LibButtonIconVariant,
} from "../../types"
import type { InputBaseProps } from "../InputComponents/types"

interface InputCounterPropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
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

interface InputCounterInputEditable extends InputCounterPropsBase {
    isInputEditable?: true | undefined
    inputBackground?: LibInputBackground
    inputVariant?: LibInputVariant
}

interface InputCounterInputNotEditable extends InputCounterPropsBase {
    isInputEditable?: false
    inputBackground?: never
    inputVariant?: never
}

export type InputCounterProps =
    | InputCounterInputEditable
    | InputCounterInputNotEditable
