import type { LibComponentBase } from "../../types"
import type {
	ILibInputExtended,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibTextEditor = LibComponentBase<HTMLDivElement> &
	ILibInputExtended &
	ILibInputWithValidation & {}
