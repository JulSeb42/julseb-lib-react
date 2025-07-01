import type { InputHTMLAttributes, Ref } from "react"
import type { LibRadiuses, ReactChildren } from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibInputImage = InputHTMLAttributes<HTMLInputElement> &
	Omit<ILibInputCommon, "inputVariant" | "inputBackground"> &
	ILibInputWithValidation & {
		ref?: Ref<HTMLLabelElement>
		children?: never
		id: string
		value: string
		borderRadius?: LibRadiuses
		icons?: {
			empty?: ReactChildren
			hover?: ReactChildren
		}
		type?: never
	}
