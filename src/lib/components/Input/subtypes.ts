/*=============================================== Input sub components types ===============================================*/

import type {
    InputHTMLAttributes,
    MouseEventHandler,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react"
import type {
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    ReactChildren,
} from "../../types"
import type {
    ILibExtendedInputBase,
    ILibInputIcon,
    ILibInputNoFocusKeys,
    LibInputWithValidation,
} from "../InputComponents/types"
import type { ILibInputBaseMixin } from "../ComponentsMixins"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN INPUT COMPONENTS

/*====================== ColorInput ======================*/

export type ILibColorInput = InputHTMLAttributes<HTMLInputElement> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputNoFocusKeys & {
        type: "color"
    }

/*====================== DateInput ======================*/

export type ILibDateInput = InputHTMLAttributes<HTMLInputElement> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputIcon &
    LibInputWithValidation &
    ILibInputNoFocusKeys & {
        type: "date" | "datetime-local" | "month" | "week"
        iconCalendar?: LibIcon
        iconCalendarSize?: number
    }

/*====================== FileInput ======================*/

export type ILibFileInput = InputHTMLAttributes<HTMLInputElement> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    LibInputWithValidation &
    ILibInputNoFocusKeys & {
        type: "file"
    }

/*====================== PasswordInput ======================*/

type ILibPasswordInputBase = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputIcon &
    LibInputWithValidation &
    ILibInputNoFocusKeys & {
        type: "password"
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
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputIcon & {
        type: "search"
        clearSearch?: MouseEventHandler<HTMLButtonElement>
        iconClear?: LibIcon
        iconClearSize?: number
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
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle" | "children"> &
    ILibInputIcon &
    ILibInputNoFocusKeys & {
        type: "select"
        iconSelect?: LibIcon
        iconSelectSize?: number
        children?: ReactChildren
    }

/*====================== TextareaInput ======================*/

export type ILibTextareaInput = TextareaHTMLAttributes<HTMLTextAreaElement> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputNoFocusKeys & {
        type: "textarea"
        inputVariant?: never
    }

/*====================== TextInput ======================*/

export type ILibTextInput = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputIcon &
    LibInputWithValidation &
    Partial<ILibInputNoFocusKeys> & {
        type?: "email" | "number" | "tel" | "text" | "url" | undefined
    }

/*====================== TimeInput ======================*/

export type ILibTimeInput = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix"
> &
    Omit<ILibExtendedInputBase, "inputAndListContainerStyle"> &
    ILibInputIcon &
    LibInputWithValidation &
    ILibInputNoFocusKeys & {
        type: "time"
        iconClock?: LibIcon
        iconClockSize?: number
    }

/*====================== Styles ======================*/

export interface ILibInputStyle extends ILibInputBaseMixin {
    $inputVariant: LibInputVariant | undefined
    $inputBackground: LibInputBackground | undefined
    $isSelect?: boolean
    $isTextarea?: boolean
}
