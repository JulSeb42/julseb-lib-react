import type { LibAllColors, LibComponentBase, LibMaxWidth } from "../../types"

export interface ILibHr extends LibComponentBase<HTMLHRElement> {
	children?: never
	maxWidth?: LibMaxWidth
	color?: LibAllColors
	isRounded?: boolean
}
