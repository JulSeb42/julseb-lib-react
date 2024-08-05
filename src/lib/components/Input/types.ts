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

export type ILibDateInput = InputHTMLAttributes<HTMLInputElement> &
    ILibExtendedInputBase &
    ILibInputIcon &
    ILibInputValidationIconComponent &
    ILibInputNoFocusKeys & {
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
    iconValidationBaseUrl?: string
    children?: never
}

/*====================== PasswordInput ======================*/

type ILibPasswordInputBase = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    ILibExtendedInputBase &
    ILibInputIcon &
    ILibInputValidationIconComponent &
    ILibInputNoFocusKeys & {
        type: "password"
        children?: never
    }

type PasswordInputWithButtonIcon = ILibPasswordInputBase & {
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

type PasswordWithButtonText = ILibPasswordInputBase & {
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

type PasswordWithoutButton = ILibPasswordInputBase & {
    hideButton?: true
    button?: never
}

export type ILibPasswordInput =
    | PasswordInputWithButtonIcon
    | PasswordWithButtonText
    | PasswordWithoutButton

/*====================== SearchInput ======================*/

type ILibSearchInputBase = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    ILibExtendedInputBase &
    ILibInputIcon & {
        type: "search"
        clearSearch?: MouseEventHandler<HTMLButtonElement>
        iconClear?: LibIcon
        iconClearSize?: number
        children?: never
    }

type SearchInputShowKeys = ILibSearchInputBase & {
    focusKeys?: Array<string>
    showKeys?: boolean
}

type SearchInputHideKeys = ILibSearchInputBase & {
    focusKeys?: undefined
    showKeys?: never
}

export type ILibSearchInput = SearchInputShowKeys | SearchInputHideKeys

/*====================== SelectInput ======================*/

export type ILibSelectInput = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "prefix"
> &
    ILibExtendedInputBase &
    ILibInputIcon &
    ILibInputNoFocusKeys & {
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

export type ILibTextInput = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    ILibExtendedInputBase &
    ILibInputIcon &
    ILibInputValidationIconComponent &
    Partial<ILibInputNoFocusKeys> & {
        type?: "email" | "number" | "tel" | "text" | "url" | undefined
        children?: never
    }

/*====================== TimeInput ======================*/

export type ILibTimeInput = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    ILibExtendedInputBase &
    ILibInputIcon &
    ILibInputValidationIconComponent &
    ILibInputNoFocusKeys & {
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
