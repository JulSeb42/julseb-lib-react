import type {
	LibComponentBase,
	LibSpacers,
	LibColors,
	LibMinHeight,
} from "../../types"

export interface ILibWrapper extends LibComponentBase<HTMLDivElement> {
	gap?: LibSpacers
	backgroundColor?: LibColors
	minHeight?: LibMinHeight
}
