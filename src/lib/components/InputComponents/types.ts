/*=============================================== InputComponents types ===============================================*/

import type { MouseEventHandler } from "react"
import type {
    ReactChildren,
    FontStyle,
    LibListDirection,
    LibAllColors,
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
    RequireAtLeastOne,
} from "../../types"

interface ValidationHelper {
    status: LibValidationStatus
    message: string
    iconNotPassed?: LibIcon
    iconNotPassedSize?: number
    iconPassed?: LibIcon
    iconPassedSize?: number
}

export interface InputValidationIcon {
    validationIcon?: {
        iconValidationNotPassed?: LibIcon
        iconValidationNotPassedSize?: number
        iconValidationPassed?: LibIcon
        iconValidationPassedSize?: number
    }
}

export interface InputBaseProps {
    "data-testid"?: string
    id?: string
    label?: string | JSX.Element
    helper?: string
    helperBottom?:
        | string
        | {
              text: string
              textColor?: LibAllColors
              fontStyle?: FontStyle
              icon?: LibIcon
              iconColor?: LibAllColors
              iconSize?: number
          }
    validation?: ValidationHelper
    inputBackground?: LibInputBackground
    inputVariant?: LibInputVariant
}

export interface ExtendedInputBaseProps extends InputBaseProps {
    counter?: boolean
    maxLength?: number
}

export interface InputContainerProps {
    "data-testid": string | undefined
    className: string | undefined
    id: string | undefined
    label: string | JSX.Element | undefined
    helper: string | undefined
    helperBottom:
        | string
        | {
              text: string
              textColor?: LibAllColors
              fontStyle?: FontStyle
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

export interface InputIconContainerProps {
    "data-testid": string | undefined
    className: string | undefined
    icon: LibIcon | undefined
    iconSize: number | undefined
    validationStatus: LibValidationStatus | undefined
    disabled: boolean | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
}

export interface InputRightContainerProps {
    "data-testid": string | undefined
    className: string | undefined
    children?: ReactChildren
    inputVariant: LibInputVariant | undefined
    disabled: boolean | undefined
}

export interface InputValidationHelperProps {
    "data-testid": string | undefined
    className: string | undefined
    validation: ValidationHelper
}

export interface InputValidationIconProps {
    "data-testid": string | undefined
    className: string | undefined
    inputBackground: LibInputBackground | undefined
    validation: { status: LibValidationStatus }
    validationIcon:
        | {
              iconValidationNotPassed?: LibIcon
              iconValidationNotPassedSize?: number
              iconValidationPassed?: LibIcon
              iconValidationPassedSize?: number
          }
        | undefined
}

interface InputButtonPropsBase {
    "data-testid": string | undefined
    "aria-label": string | undefined
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled: boolean | undefined
    inputBackground: LibInputBackground | undefined
    validationStatus: LibValidationStatus | undefined
    className: string | undefined
}

interface InputButtonIcon extends InputButtonPropsBase {
    icon: LibIcon | undefined
    iconSize: number | undefined
    text?: never
}

interface InputButtonText extends InputButtonPropsBase {
    icon?: never
    iconSize?: never
    text: string | undefined
}

export type InputButtonProps = RequireAtLeastOne<
    InputButtonIcon | InputButtonText,
    "icon" | "text"
>

export interface InputWrapperProps {
    "data-testid": string | undefined
    className: string | undefined
    hasContainer: boolean | undefined
    children?: ReactChildren
    hasListOpen?: boolean
}

export interface ListInputProps {
    "data-testid": string | undefined
    className: string | undefined
    direction: LibListDirection | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    validation: LibValidationStatus
    isOpen: boolean
    children?: ReactChildren
}

interface ListInputItemPropsBase {
    "data-testid": string | undefined
    className: string | undefined
    validation: LibValidationStatus
    inputBackground: LibInputBackground | undefined
    children?: ReactChildren
}

interface ListInputItemActive extends ListInputItemPropsBase {
    isActive: boolean
    onClick: MouseEventHandler<HTMLSpanElement>
    readOnly?: never
}

interface ListInputItemReadOnly extends ListInputItemPropsBase {
    isActive?: never
    onClick?: never
    readOnly: true
}

export type ListInputItemProps = ListInputItemActive | ListInputItemReadOnly
