import type {
	LibComponentBase,
	LibColors,
	LibSpacers,
	LibMainSize,
} from "../../types"

export interface ILibMain extends LibComponentBase<HTMLDivElement> {
	gap?: LibSpacers
	backgroundColor?: LibColors
	size?: LibMainSize
}
