import type {
	LibAllColors,
	LibAsideSize,
	LibComponentBase,
	LibSpacers,
} from "../../types"

export interface ILibAside extends LibComponentBase<HTMLDivElement> {
	size?: LibAsideSize
	backgroundColor?: LibAllColors
	gap?: LibSpacers
}
