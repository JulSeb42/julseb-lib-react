/*=============================================== InputCheck types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { LibIcon, LibValidationStatus } from "../../types"

const checkVariants = {
    tile: "tile",
    toggle: "toggle",
    selector: "selector",
} as const
export type LibInputCheckVariant = keyof typeof checkVariants

interface InputCheckPropsBase extends InputHTMLAttributes<HTMLInputElement> {
    "data-testid"?: string
    id: string
    validation?: LibValidationStatus
    variant?: LibInputCheckVariant
}

interface InputCheckbox extends InputCheckPropsBase {
    type?: "checkbox"
    iconCheck?: LibIcon
    iconCheckSize?: number
}

interface InputRadio extends InputCheckPropsBase {
    type?: "radio"
    iconCheck?: never
    iconCheckSize?: never
}

export type InputCheckProps = InputCheckbox | InputRadio
