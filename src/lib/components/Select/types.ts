import type { ButtonHTMLAttributes } from "react"
import type {
	DispatchState,
	LibComponentBase,
	LibInputListDirection,
} from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
	ILibInputWithPrefix,
} from "../InputComponents"

export type ILibSelect = Omit<LibComponentBase<HTMLButtonElement>, "prefix" | "element"> &
	ButtonHTMLAttributes<HTMLButtonElement> &
	ILibInputCommon &
	ILibInputWithValidation &
	ILibInputWithPrefix & {
		value: string
		setValue: DispatchState<string>
		options: Array<string>
		listDirection?: LibInputListDirection
		icons?: { left?: ReactElement; caret?: ReactElement }
	}
