import type { LibAllColors, LibComponentBase, LibRadiuses } from "../../types"

export interface ILibBadge extends LibComponentBase<HTMLSpanElement> {
	backgroundColor?: LibAllColors
	contentColor?: LibAllColors
	borderRadius?: LibRadiuses
}
