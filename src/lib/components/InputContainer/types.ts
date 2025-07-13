import type { ClassNames, LibComponentBase } from "../../types"
import type {
	ILibInputWithList,
	ILibInputWithValidation,
} from "../InputComponents/types"

export type ILibInputContainer = Omit<
	LibComponentBase<HTMLDivElement>,
	"className"
> &
	Omit<
		ILibInputWithList,
		"inputBackground" | "inputVariant" | "className" | "containerClassName"
	> &
	ILibInputWithValidation & {
		hasListOpen?: boolean
		className?: ClassNames
	}
