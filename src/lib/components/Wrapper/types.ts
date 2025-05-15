import type { LibComponentBase, LibSpacers, LibColors } from "../../types"

export interface ILibWrapper extends LibComponentBase<HTMLDivElement> {
	gap?: Exclude<LibSpacers, "0px">
	backgroundColor?: LibColors
	minHeight?: string | number
}
