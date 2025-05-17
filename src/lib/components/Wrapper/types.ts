import type {
	LibComponentBase,
	LibSpacers,
	LibAllColors,
	LibMinHeight,
} from "../../types"

export interface ILibWrapper extends LibComponentBase<HTMLDivElement> {
	gap?: LibSpacers
	backgroundColor?: LibAllColors
	minHeight?: LibMinHeight
}
