import type { LibComponentBase, LibRadiuses } from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibFieldset = Omit<
	LibComponentBase<HTMLFieldSetElement>,
	"element"
> &
	Omit<
		ILibInputCommon,
		"inputBackground" | "inputVariant" | "label" | "labelComment" | "helper"
	> &
	ILibInputWithValidation & {
		legend: string
		borderRadius?: LibRadiuses
	}
