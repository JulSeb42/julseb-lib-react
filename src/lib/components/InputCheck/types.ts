/*=============================================== InputCheck types ===============================================*/

import type { CSSProperties, InputHTMLAttributes } from "react"
import type {
    LibIcon,
    LibValidationStatus,
    LibInputCheckVariant,
} from "../../types"

interface ILibInputCheckBase extends InputHTMLAttributes<HTMLInputElement> {
    "data-testid"?: string
    id: string
    label: string
    children?: never
    validation?: LibValidationStatus
    variant?: LibInputCheckVariant
    containerStyle?: CSSProperties
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
