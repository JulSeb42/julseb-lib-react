import type { LibComponentBase, LibSpacers } from "../../types"

export interface ILibSection extends LibComponentBase<HTMLDivElement> {
	gap?: Exclude<LibSpacers, "0px">
}
