import type { LibAsideSize, LibColors, LibComponentBase } from "../../types"

export interface ILibAside extends LibComponentBase<HTMLDivElement> {
	size?: LibAsideSize
	backgroundColor?: LibColors
}
