import type { Ref, InputHTMLAttributes } from "react"
import type {
	LibCheckInputVariant,
	LibComponentBase,
	ReactChildren,
} from "../../types"
import type { ILibValidationStatus } from "../InputComponents"

type ILibInputCheckBase = Omit<LibComponentBase<HTMLInputElement>, "element"> &
	InputHTMLAttributes<HTMLInputElement> & {
		ref?: Ref<HTMLLabelElement>
		id: string
		validation?: ILibValidationStatus
		variant?: LibCheckInputVariant
	}

interface InputCheckbox extends ILibInputCheckBase {
	type?: "checkbox"
	iconCheck?: ReactChildren
}

interface InputRadio extends ILibInputCheckBase {
	type?: "radio"
	iconCheck?: never
}

export type ILibInputCheck = InputCheckbox | InputRadio
