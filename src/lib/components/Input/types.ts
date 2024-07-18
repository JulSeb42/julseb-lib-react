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
    ILibInputNoFocusKeys,
    ILibInputIcon,
} from "../InputComponents/types"

/*====================== ColorInput ======================*/

export interface ILibColorInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputNoFocusKeys {
    type: "color"
    children?: never
}

/*====================== DateInput ======================*/

export interface ILibDateInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent,
        ILibInputNoFocusKeys {
    type: "date" | "datetime-local" | "month" | "week"
    iconCalendar?: LibIcon
    iconCalendarSize?: number
    children?: never
}

/*====================== FileInput ======================*/

export interface ILibFileInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputValidationIconComponent,
        ILibInputNoFocusKeys {
    type: "file"
    children?: never
}

/*====================== PasswordInput ======================*/

interface ILibPasswordInputBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent,
        ILibInputNoFocusKeys {
    type: "password"
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

/*====================== SearchInput ======================*/

interface ILibSearchInputBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon {
    type: "search"
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

/*====================== SelectInput ======================*/

export interface ILibSelectInput
    extends SelectHTMLAttributes<HTMLSelectElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputNoFocusKeys {
    type: "select"
    iconSelect?: LibIcon
    iconSelectSize?: number
    children?: ReactChildren
}

/*====================== TextareaInput ======================*/

export interface ILibTextareaInput
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        ILibExtendedInputBase,
        ILibInputNoFocusKeys {
    type: "textarea"
    inputVariant?: never
    children?: never
}

/*====================== TextInput ======================*/

export interface ILibTextInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent,
        Partial<ILibInputNoFocusKeys> {
    type?: "email" | "number" | "tel" | "text" | "url" | undefined
    children?: never
}

/*====================== TimeInput ======================*/

export interface ILibTimeInput
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibExtendedInputBase,
        ILibInputIcon,
        ILibInputValidationIconComponent,
        ILibInputNoFocusKeys {
    type: "time"
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
