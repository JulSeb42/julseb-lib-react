import type { LibComponentBase } from "../../types"
import type {
	ILibInputWithList,
	ILibInputWithValidation,
} from "../InputComponents/types"

export type ILibInputContainer = LibComponentBase<HTMLDivElement> &
	ILibInputWithList &
	ILibInputWithValidation & {
		hasListOpen?: boolean
	}
