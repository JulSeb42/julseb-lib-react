import type { LibComponentBase } from "../../types"
import type {
	ILibInputWithList,
	ILibInputWithValidation,
} from "../InputComponents/types"

export type ILibInputContainer = LibComponentBase<HTMLDivElement> &
	Omit<ILibInputWithList, "inputBackground" | "inputVariant"> &
	ILibInputWithValidation & {
		hasListOpen?: boolean
	}
