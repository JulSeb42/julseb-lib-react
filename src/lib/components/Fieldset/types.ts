import type { LibComponentBase, LibRadiuses, ReactChildren } from "../../types"
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
		legend: ReactChildren
		borderRadius?: LibRadiuses
	}
