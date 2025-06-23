import type { LibAllColors, LibComponentBase } from "../../types"

export interface ILibLoader extends LibComponentBase<HTMLSpanElement> {
	children?: never
	variant?: 1 | 2 | 3
	color?: LibAllColors
}
