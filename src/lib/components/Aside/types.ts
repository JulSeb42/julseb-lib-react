import type { LibAllColors, LibAsideSize, LibComponentBase } from "../../types"

export interface ILibAside extends LibComponentBase<HTMLDivElement> {
	size?: LibAsideSize
	backgroundColor?: LibAllColors
}
