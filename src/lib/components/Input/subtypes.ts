import type {
	InputHTMLAttributes,
	MouseEventHandler,
	Ref,
	SelectHTMLAttributes,
	TextareaHTMLAttributes,
} from "react"
import type { ReactChildren } from "../../types"
import type {
	ILibInputCommon,
	ILibInputExtended,
	ILibInputWithIcon,
	ILibInputWithValidation,
	ILibInputWithPrefix,
	ILibInputWithSuffix,
} from "../InputComponents"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN INPUT COMPONENTS

/*====================== Color ======================*/

export type ILibColorInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputCommon &
	ILibInputWithValidation & {
		type: "color"
	}

/*====================== Date ======================*/

export type ILibDateInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputCommon &
	ILibInputWithIcon &
	ILibInputWithValidation & {
		type: "date" | "datetime-local" | "month" | "week"
		iconCalendar?: ReactChildren
	}

/*====================== File ======================*/

export type ILibFileInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputCommon &
	ILibInputWithValidation & {
		type: "file"
	}

/*====================== Password ======================*/

type ILibPasswordInputBase = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputExtended &
	ILibInputWithIcon &
	ILibInputWithValidation &
	ILibInputWithPrefix & {
		type: "password"
	}

type PasswordInputWithButtonIcon = ILibPasswordInputBase & {
	hideButton?: false
	button?: {
		iconShow?: ReactChildren
		iconHide?: ReactChildren
		textShow?: never
		textHide?: never
	}
}

type PasswordWithButtonText = ILibPasswordInputBase & {
	hideButton?: false
	button?: {
		iconShow?: never
		iconHide?: never
		textShow?: string
		textHide?: string
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

/*====================== Search ======================*/

type ILibSearchInputBase = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputExtended &
	ILibInputWithIcon &
	ILibInputWithPrefix & {
		type: "search"
		clearSearch?: MouseEventHandler<HTMLButtonElement>
		iconClear?: ReactChildren
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

/*====================== Select ======================*/

export type ILibSelectInput = Omit<
	SelectHTMLAttributes<HTMLSelectElement>,
	"prefix"
> &
	ILibInputCommon &
	ILibInputWithIcon &
	ILibInputWithValidation & {
		type: "select"
		iconSelect?: ReactChildren
		children?: ReactChildren
	}

/*====================== Textarea ======================*/

export type ILibTextareaInput = TextareaHTMLAttributes<HTMLTextAreaElement> &
	Omit<ILibInputCommon, "inputVariant"> &
	ILibInputWithValidation & {
		ref?: Ref<HTMLTextAreaElement>
		type: "textarea"
	}

/*====================== Text ======================*/

export type ILibTextInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputExtended &
	ILibInputWithIcon &
	ILibInputWithValidation &
	ILibInputWithPrefix &
	ILibInputWithSuffix & {
		type?: "email" | "number" | "tel" | "text" | "url" | undefined
	}

/*====================== Time ======================*/

export type ILibTimeInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"prefix"
> &
	ILibInputCommon &
	ILibInputWithIcon &
	ILibInputWithValidation &
	ILibInputWithPrefix & {
		type: "time"
		iconClock?: ReactChildren
	}
