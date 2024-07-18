/*=============================================== InputComponents types ===============================================*/

import type { MouseEventHandler } from "react"
import type {
    ReactChildren,
    CssFontStyle,
    LibInputListDirection,
    LibAllColors,
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
    RequireAtLeastOne,
} from "../../types"

/*====================== Validation ======================*/

interface ValidationHelper {
    status: LibValidationStatus
    message: string
    iconNotPassed?: LibIcon
    iconNotPassedSize?: number
    iconPassed?: LibIcon
    iconPassedSize?: number
}

export interface ILibInputValidationIconComponent {
    validationIcon?:
        | {
              iconValidationNotPassed?: LibIcon
              iconValidationNotPassedSize?: number
              iconValidationPassed?: LibIcon
              iconValidationPassedSize?: number
          }
        | undefined
}

export interface ILibInputValidationHelper {
    "data-testid": string | undefined
    className: string | undefined
    validation: ValidationHelper
}

export interface ILibInputValidationIcon
    extends ILibInputValidationIconComponent {
    "data-testid": string | undefined
    className: string | undefined
    inputBackground: LibInputBackground | undefined
    validation: { status: LibValidationStatus }
}

/*====================== No focus ======================*/

export interface ILibInputNoFocusKeys {
    type:
        | undefined
        | null
        | "email"
        | "number"
        | "tel"
        | "text"
        | "url"
        | "color"
        | "date"
        | "datetime-local"
        | "month"
        | "week"
        | "file"
        | "password"
        | "select"
        | "textarea"
        | "time"
    focusKeys?: never
    showKeys?: never
}

/*====================== InputBase ======================*/

export interface ILibInputBase
    extends Partial<
        Pick<
            ILibInputContainer,
            | "data-testid"
            | "id"
            | "label"
            | "labelComment"
            | "helper"
            | "helperBottom"
            | "validation"
        >
    > {
    inputBackground?: LibInputBackground
    inputVariant?: LibInputVariant
}

export interface ILibExtendedInputBase extends ILibInputBase {
    counter?: boolean
    maxLength?: number
}

/*====================== InputContainer ======================*/

export interface ILibInputContainer {
    "data-testid": string | undefined
    className: string | undefined
    id: string | undefined
    label: string | undefined
    labelComment: string | undefined
    helper: string | undefined
    helperBottom:
        | string
        | {
              text: string
              textColor?: LibAllColors
              fontStyle?: CssFontStyle
              icon?: LibIcon
              iconColor?: LibAllColors
              iconSize?: number
          }
        | undefined
    validation: ValidationHelper | undefined
    children?: ReactChildren
    value: any | undefined
    counter: boolean | undefined
    maxLength: number | undefined
    hasListOpen?: boolean
}

/*====================== InputIconContainer ======================*/

export interface ILibInputIconContainer {
    "data-testid": string | undefined
    className: string | undefined
    icon: LibIcon | undefined
    iconSize: number | undefined
    validationStatus: LibValidationStatus | undefined
    disabled: boolean | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
}

/*====================== InputRightContainer ======================*/

export interface ILibInputRightContainer {
    "data-testid": string | undefined
    className: string | undefined
    children?: ReactChildren
    inputVariant: LibInputVariant | undefined
    disabled: boolean | undefined
}

/*====================== InputButton ======================*/

interface ILibInputButtonBase {
    "data-testid": string | undefined
    "aria-label": string | undefined
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled: boolean | undefined
    inputBackground: LibInputBackground | undefined
    validationStatus: LibValidationStatus | undefined
    className: string | undefined
}

interface InputButtonWithIcon extends ILibInputButtonBase {
    icon: LibIcon | undefined
    iconSize: number | undefined
    text?: never
}

interface InputButtonWithText extends ILibInputButtonBase {
    icon?: never
    iconSize?: never
    text: string | undefined
}

export type ILibInputButton = RequireAtLeastOne<
    InputButtonWithIcon | InputButtonWithText,
    "icon" | "text"
>

/*====================== InputWrapper ======================*/

export interface ILibInputWrapper {
    "data-testid": string | undefined
    className: string | undefined
    hasContainer: boolean | undefined
    children?: ReactChildren
    hasListOpen?: boolean
}

/*====================== List input ======================*/

export interface ILibListInput {
    "data-testid": string | undefined
    className: string | undefined
    direction: LibInputListDirection | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    validation: LibValidationStatus
    isOpen: boolean
    children?: ReactChildren
}

/*====================== List input item ======================*/

interface ILibListInputItemBase {
    "data-testid": string | undefined
    className: string | undefined
    validation: LibValidationStatus
    inputBackground: LibInputBackground | undefined
    children?: ReactChildren
}

interface ListInputItemActive extends ILibListInputItemBase {
    isActive: boolean
    onClick: MouseEventHandler<HTMLSpanElement>
    readOnly?: never
}

interface ListInputItemReadOnly extends ILibListInputItemBase {
    isActive?: never
    onClick?: never
    readOnly: true
}

export type ILibListInputItem = ListInputItemActive | ListInputItemReadOnly

/*====================== Input with icon ======================*/

export interface ILibInputIcon {
    icon?: LibIcon
    iconSize?: number
}
