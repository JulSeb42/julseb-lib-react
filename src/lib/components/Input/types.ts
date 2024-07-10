/*=============================================== Input types ===============================================*/

import type {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
    MouseEventHandler
} from "react"
import type {
    LibIcon,
    ReactChildren,
} from "../../types"
import type {
    ExtendedInputBaseProps,
    InputValidationIcon,
} from "../InputComponents/types"

const inputTypes = {
    color: "color",
    date: "date",
    "datetime-local": "datetime-local",
    month: "month",
    week: "week",
    file: "file",
    password: "password",
    search: "search",
    select: "select",
    textarea: "textarea",
    email: "email",
    number: "number",
    tel: "tel",
    text: "text",
    url: "url",
    time: "time",
} as const
export type LibInputType = keyof typeof inputTypes

export interface InputIconProps {
    icon?: LibIcon
    iconSize?: number
}

export interface ColorInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps {
    type?: "color"
    children?: never
}

export interface DateInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps,
        InputIconProps,
        InputValidationIcon {
    type?: "date" | "datetime-local" | "month" | "week"
    iconCalendar?: LibIcon
    iconCalendarSize?: number
    children?: never
}

export interface FileInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps,
        InputValidationIcon {
    type?: "file"
    children?: never
}

interface PasswordInputPropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps,
        InputIconProps,
        InputValidationIcon {
    type?: "password"
    children?: never
}

interface PasswordInputWithButtonIcon extends PasswordInputPropsBase {
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

interface PasswordWithButtonText extends PasswordInputPropsBase {
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

interface PasswordWithoutButton extends PasswordInputPropsBase {
    hideButton?: true
    button?: never
}

export type PasswordInputProps =
    | PasswordInputWithButtonIcon
    | PasswordWithButtonText
    | PasswordWithoutButton

interface SearchInputPropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps,
        InputIconProps {
    type?: "search"
    clearSearch?: MouseEventHandler<HTMLButtonElement>
    iconClear?: LibIcon
    iconClearSize?: number
    children?: never
}

interface SearchInputShowKeys extends SearchInputPropsBase {
    focusKeys?: Array<string>
    showKeys?: boolean
}

interface SearchInputHideKeys extends SearchInputPropsBase {
    focusKeys?: undefined
    showKeys?: never
}

export type SearchInputProps = SearchInputShowKeys | SearchInputHideKeys

export interface SelectInputProps
    extends SelectHTMLAttributes<HTMLSelectElement>,
        ExtendedInputBaseProps,
        InputIconProps {
    type?: "select"
    iconSelect?: LibIcon
    iconSelectSize?: number
    children?: ReactChildren
}

export interface TextareaInputProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        ExtendedInputBaseProps {
    type?: "textarea"
    inputVariant?: never
    children?: never
}

export interface TextInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps,
        InputIconProps,
        InputValidationIcon {
    type?: "email" | "number" | "tel" | "text" | "url"
    children?: never
}

export interface TimeInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        ExtendedInputBaseProps,
        InputIconProps,
        InputValidationIcon {
    type?: "time"
    iconClock?: LibIcon
    iconClockSize?: number
    children?: never
}

export type InputProps =
    | ColorInputProps
    | DateInputProps
    | FileInputProps
    | PasswordInputProps
    | SearchInputProps
    | SelectInputProps
    | TextareaInputProps
    | TextInputProps
    | TimeInputProps
