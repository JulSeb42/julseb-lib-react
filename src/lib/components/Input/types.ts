/*=============================================== Input types ===============================================*/

import type {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
    MouseEventHandler,
} from "react"
import type { LibIcon, ReactChildren } from "../../types"
import type {
    ILibExtendedInputBase,
    ILibInputValidationIconComponent,
} from "../InputComponents/types"

export interface ILibInputIcon {
    icon?: LibIcon
    iconSize?: number
}

export interface ILibColorInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase {
    type?: "color"
    children?: never
}

export interface ILibDateInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent {
    type?: "date" | "datetime-local" | "month" | "week"
    iconCalendar?: LibIcon
    iconCalendarSize?: number
    children?: never
}

export interface ILibFileInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputValidationIconComponent {
    type?: "file"
    children?: never
}

interface ILibPasswordInputBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent {
    type?: "password"
    children?: never
}

interface PasswordInputWithButtonIcon extends ILibPasswordInputBase {
    hideButton?: false
    button?: {
        iconShow: LibIcon
        iconShowSize?: number
        iconHide: LibIcon
        iconHideSize?: number
        textShow?: never
        textHide?: never
    }
}

interface PasswordWithButtonText extends ILibPasswordInputBase {
    hideButton?: false
    button?: {
        iconShow?: never
        iconShowSize?: never
        iconHide?: never
        iconHideSize?: never
        textShow: string
        textHide: string
    }
}

interface PasswordWithoutButton extends ILibPasswordInputBase {
    hideButton?: true
    button?: never
}

export type ILibPasswordInput =
    | PasswordInputWithButtonIcon
    | PasswordWithButtonText
    | PasswordWithoutButton

interface ILibSearchInputBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon {
    type?: "search"
    clearSearch?: MouseEventHandler<HTMLButtonElement>
    iconClear?: LibIcon
    iconClearSize?: number
    children?: never
}

interface SearchInputShowKeys extends ILibSearchInputBase {
    focusKeys?: Array<string>
    showKeys?: boolean
}

interface SearchInputHideKeys extends ILibSearchInputBase {
    focusKeys?: undefined
    showKeys?: never
}

export type ILibSearchInput = SearchInputShowKeys | SearchInputHideKeys

export interface ILibSelectInput
    extends SelectHTMLAttributes<HTMLSelectElement>,
        ILibExtendedInputBase,
        ILibInputIcon {
    type?: "select"
    iconSelect?: LibIcon
    iconSelectSize?: number
    children?: ReactChildren
}

export interface ILibTextareaInput
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        ILibExtendedInputBase {
    type?: "textarea"
    inputVariant?: never
    children?: never
}

export interface ILibTextInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent {
    type?: "email" | "number" | "tel" | "text" | "url"
    children?: never
}

export interface ILibTimeInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent {
    type?: "time"
    iconClock?: LibIcon
    iconClockSize?: number
    children?: never
}

export type ILibInput =
    | ILibColorInput
    | ILibDateInput
    | ILibFileInput
    | ILibPasswordInput
    | ILibSearchInput
    | ILibSelectInput
    | ILibTextareaInput
    | ILibTextInput
    | ILibTimeInput
