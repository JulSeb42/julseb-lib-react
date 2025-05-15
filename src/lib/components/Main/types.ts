import type {
	LibComponentBase,
	LibColors,
	LibSpacers,
	LibMainSize,
} from "../../types"

export interface ILibMain extends LibComponentBase<HTMLDivElement> {
	gap?: Exclude<LibSpacers, "0px">
	backgroundColor?: LibColors
	size?: LibMainSize
}
