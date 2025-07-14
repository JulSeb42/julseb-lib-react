import type { LibComponentBase, LibSpacers } from "../../types"

export interface ILibMasonry extends LibComponentBase<HTMLDivElement> {
	col?: number
	gap?: LibSpacers
	rowGap?: LibSpacers
	colGap?: LibSpacers
}
