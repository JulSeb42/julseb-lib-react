import type { InputHTMLAttributes } from "react"
import type { LibComponentBase } from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibInputSlider = Omit<
	LibComponentBase<HTMLInputElement>,
	"element"
> &
	InputHTMLAttributes<HTMLInputElement> &
	ILibInputCommon &
	ILibInputWithValidation & {
		showMinMax?: boolean
		showValue?: "hover" | "always" | "never"
		min?: number
		max?: number
		value?: number
		type?: never
		children?: never
	}
