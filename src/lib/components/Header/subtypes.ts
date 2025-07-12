import type { FormEvent } from "react"
import type {
	DispatchState,
	LibInputBackground,
	LibInputVariant,
} from "../../types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN ACCORDION COMPONENTS

export type LibHeaderSearch = {
	value: string
	setValue: DispatchState<string>
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void
	placeholder?: string
	iconLeft?: ReactElement
	iconClear?: ReactElement
	focusKeys?: Array<string>
	showKeys?: boolean
	inputBackground?: LibInputBackground
	inputVariant?: LibInputVariant
	maxWidth?: string | number
	clearSearch?: () => void
}

export interface ILibHeaderSearch {
	search?: LibHeaderSearch
	handleClose: () => void
}
