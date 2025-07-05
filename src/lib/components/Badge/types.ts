import type { LibAllColors, LibComponentBase, LibRadiuses } from "../../types"

export interface ILibBadge extends LibComponentBase<HTMLSpanElement> {
	color?: LibAllColors
	contentColor?: LibAllColors
	borderRadius?: LibRadiuses
}
