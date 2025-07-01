import type { Ref } from "react"
import type {
	ReactChildren,
	LibInputValidation,
	LibInputVariant,
	LibInputBackground,
} from "../../types"

interface ILibInputBase {
	ref?: Ref<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
	helper?: ReactChildren
	helperBottom?: ReactChildren
	value?: any
	inputVariant?: LibInputVariant
	inputBackground?: LibInputBackground
}

interface InputWithLabel extends ILibInputBase {
	label?: ReactChildren
	labelComment?: ReactChildren
}

interface InputWithoutLabel extends ILibInputBase {
	label?: undefined
	labelComment?: never
}

export type ILibInputCommon = InputWithLabel | InputWithoutLabel

type InputWithCounter = ILibInputCommon & {
	counter?: true
	maxLength?: number
}

type InputWithoutCounter = ILibInputCommon & {
	counter?: false | undefined
	maxLength?: never
}

export type ILibInputExtended = InputWithCounter | InputWithoutCounter

export type ILibInputWithList = ILibInputExtended & { hasListOpen?: boolean }

export type ILibValidationStatus = boolean | undefined

export interface ILibInputWithValidation {
	validation?: LibInputValidation
}

export interface ILibInputWithIcon {
	icon?: ReactChildren
}

export interface ILibInputWithPrefix {
	prefix?: string
}

export interface ILibInputWithSuffix {
	suffix?: string
}
