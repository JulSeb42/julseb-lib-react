import type { LibComponentBase } from "../../types"
import type {
	ILibInputExtended,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibTextEditor = Omit<LibComponentBase<HTMLDivElement>, "element"> &
	ILibInputExtended &
	ILibInputWithValidation & {
		value?: any
	}
