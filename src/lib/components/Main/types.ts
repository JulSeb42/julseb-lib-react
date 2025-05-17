import type {
	LibComponentBase,
	LibAllColors,
	LibSpacers,
	LibMainSize,
} from "../../types"

export interface ILibMain extends LibComponentBase<HTMLDivElement> {
	gap?: LibSpacers
	backgroundColor?: LibAllColors
	size?: LibMainSize
}
