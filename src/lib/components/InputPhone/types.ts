import type { InputHTMLAttributes } from "react"
import type {
	LibComponentBase,
	CountryCode,
	LibInputListDirection,
	LibCountry,
	DispatchState,
	ReactChildren,
} from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents/types"

export type ILibInputPhone = Omit<
	LibComponentBase<HTMLInputElement>,
	"element"
> &
	InputHTMLAttributes<HTMLInputElement> &
	ILibInputCommon &
	ILibInputWithValidation & {
		selectedCountry: LibCountry
		setSelectedCountry: DispatchState<LibCountry>
		defaultCountry?: CountryCode
		icons?: { search?: ReactChildren; caret?: ReactChildren }
		searchPlaceholder?: string
		listDirection?: LibInputListDirection
		countryButtonAriaLabel?: string
		textNoResult?: string
		type?: never
		children?: never
	}
