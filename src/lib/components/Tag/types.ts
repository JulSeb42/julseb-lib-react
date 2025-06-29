import type {
	LibAllColors,
	LibComponentBase,
	LibRadiuses,
	LibTagVariant,
} from "../../types"

export interface ILibTag extends LibComponentBase<HTMLSpanElement> {
	color?: LibAllColors
	contentColor?: LibAllColors
	borderRadius?: LibRadiuses
	variant?: LibTagVariant
}
