import type { InputHTMLAttributes } from "react"
import type { IFuseOptions } from "fuse.js"
import type { DispatchState, LibComponentBase, ReactElement } from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
	ILibInputWithList,
} from "../InputComponents"

type ILibAutocompleteBase = InputHTMLAttributes<HTMLInputElement> &
	Omit<LibComponentBase<HTMLInputElement>, "element"> &
	ILibInputCommon &
	ILibInputWithValidation &
	ILibInputWithList & {
		value: string
		setValue: DispatchState<string>
		listResults: Array<string>
		textNoResult?: string
		fuzzyOptions?: IFuseOptions<string>
		icons?: { left?: ReactElement; clear?: ReactElement }
		children?: never
		type?: never
	}

type AutocompleteWithKeys = ILibAutocompleteBase & {
	focusKeys?: Array<string>
	showKeys?: boolean
}

type AutocompleteWithoutKeys = ILibAutocompleteBase & {
	focusKeys?: undefined
	showKeys?: never
}

export type ILibAutocomplete = AutocompleteWithKeys | AutocompleteWithoutKeys
