/*=============================================== InputComponents types ===============================================*/

import type { CSSProperties, MouseEventHandler } from "react"
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
    LibInputPrefixAndSuffix,
} from "../../types"

/*====================== Validation ======================*/

interface LibValidationHelper {
    status: LibValidationStatus
    message?: string
    iconNotPassed?: LibIcon
    iconNotPassedSize?: number
    iconPassed?: LibIcon
    iconPassedSize?: number
    iconBaseUrl?: string
}

export interface LibInputWithValidation {
    validation?: LibValidationHelper
}

export interface ILibInputValidationHelper {
    "data-testid": string | undefined
    className: string | undefined
    validation: LibValidationHelper
}

export interface ILibInputValidationIcon {
    "data-testid": string | undefined
    className: string | undefined
    inputBackground: LibInputBackground | undefined
    validation: LibValidationHelper
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

/**
 * @description Base props for inputs
 * @prop data-testid?: string
 */
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
            | "iconBaseUrl"
        >
    > {
    children?: never
    inputBackground?: LibInputBackground
    inputVariant?: LibInputVariant
    containerStyle?: CSSProperties
    inputAndListContainerStyle?: CSSProperties
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
    validation: LibValidationHelper | undefined
    children?: ReactChildren
    value: any | undefined
    counter: boolean | undefined
    maxLength: number | undefined
    hasListOpen?: boolean
    iconBaseUrl?: string
    style?: CSSProperties
}

/*====================== InputIconContainer ======================*/

export interface ILibInputIconContainer {
    "data-testid": string | undefined
    className: string | undefined
    icon: LibIcon | undefined
    iconSize: number | undefined
    iconBaseUrl: string | undefined
    validationStatus: LibValidationStatus | undefined
    disabled: boolean | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
}

/*====================== InputRightContainer ======================*/

export interface ILibInputRightContainer {
    "data-testid": string | undefined
    className: string | undefined
    disabled: boolean | undefined
    withPadding: boolean | undefined
    withBorder: boolean | undefined
    children?: ReactChildren
}

/*====================== InputLeftContainer ======================*/

export interface ILibInputLeftContainer {
    "data-testid": string | undefined
    className: string | undefined
    children?: ReactChildren
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
    iconBaseUrl: string | undefined
    text?: never
}

interface InputButtonWithText extends ILibInputButtonBase {
    icon?: never
    iconSize?: never
    iconBaseUrl?: never
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
    hasListOpen: boolean | undefined
    isTextArea: boolean
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    validationStatus: LibValidationStatus
}

/*====================== List input ======================*/

export interface ILibListInput {
    "data-testid": string | undefined
    className: string | undefined
    direction: LibInputListDirection | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    validationStatus: LibValidationStatus
    isOpen: boolean
    children?: ReactChildren
}

/*====================== List input item ======================*/

interface ILibListInputItemBase {
    "data-testid": string | undefined
    className: string | undefined
    validationStatus: LibValidationStatus
    inputBackground: LibInputBackground | undefined
    children?: ReactChildren
}

interface ListInputItemActive extends ILibListInputItemBase {
    isActive: boolean
    isHovered?: boolean
    onClick: MouseEventHandler<HTMLSpanElement>
    readOnly?: never
}

interface ListInputItemReadOnly extends ILibListInputItemBase {
    isActive?: never
    isHovered?: never
    onClick?: never
    readOnly: true
}

export type ILibListInputItem = ListInputItemActive | ListInputItemReadOnly

/*====================== Input with icon and prefix / suffix ======================*/

export interface ILibInputIcon {
    suffix?: LibInputPrefixAndSuffix
    icon?: LibIcon
    iconSize?: number
    iconBaseUrl?: string
    prefix?: string
}

/*====================== Inputs with prefix and suffix ======================*/

interface ILibPrefixAndSuffixBase {
    "data-testid": string | undefined
    className: string | undefined
    inputBackground: LibInputBackground | undefined
}

export interface ILibInputPrefix extends ILibPrefixAndSuffixBase {
    /**
     * @description Add prefix on inputs with text
     * @prop data-testid: string | undefined
     * @prop className: string | undefined
     * @prop inputBackground: "light" | "dark" | undefined
     * @prop suffix: string | JSX.Element | undefined
     */
    prefix: LibInputPrefixAndSuffix | undefined
}

export interface ILibInputSuffix extends ILibPrefixAndSuffixBase {
    /**
     * @description Add suffix on inputs with text
     * @prop data-testid: string | undefined
     * @prop className: string | undefined
     * @prop inputBackground: "light" | "dark" | undefined
     * @prop prefix: string | JSX.Element | undefined
     */
    suffix?: LibInputPrefixAndSuffix
}

/*====================== InputAndListContainer ======================*/

export interface ILibInputAndListContainer {
    "data-testid": string | undefined
    className: string | undefined
    hasListOpen: boolean
    isParent: boolean | undefined
    inputAndListContainerStyle: CSSProperties | undefined
    children?: ReactChildren
}
