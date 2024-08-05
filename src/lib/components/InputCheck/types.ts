/*=============================================== InputCheck types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type {
    LibIcon,
    LibValidationStatus,
    LibInputCheckVariant,
} from "../../types"

interface ILibInputCheckBase extends InputHTMLAttributes<HTMLInputElement> {
    "data-testid"?: string
    id: string
    validation?: LibValidationStatus
    variant?: LibInputCheckVariant
}

interface InputCheckbox extends ILibInputCheckBase {
    type?: "checkbox"
    iconCheck?: LibIcon
    iconCheckSize?: number
    iconBaseUrl?: string
}

interface InputRadio extends ILibInputCheckBase {
    type?: "radio"
    iconCheck?: never
    iconCheckSize?: never
    iconBaseUrl?: never
}

export type ILibInputCheck = InputCheckbox | InputRadio
