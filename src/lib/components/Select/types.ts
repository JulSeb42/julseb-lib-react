import type { ButtonHTMLAttributes } from "react"
import type { DispatchState, LibComponentBase } from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
	ILibInputWithPrefix,
	ILibInputWithList,
} from "../InputComponents"

export type ILibSelect = Omit<
	LibComponentBase<HTMLButtonElement>,
	"prefix" | "element"
> &
	ButtonHTMLAttributes<HTMLButtonElement> &
	ILibInputCommon &
	ILibInputWithValidation &
	ILibInputWithPrefix &
	ILibInputWithList & {
		value: string
		setValue: DispatchState<string>
		options: Array<string>
		icons?: { left?: ReactElement; caret?: ReactElement }
	}
