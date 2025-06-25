import type {
	LibAllColors,
	LibComponentBase,
	LibLoaderVariant,
} from "../../types"

export interface ILibLoader extends LibComponentBase<HTMLSpanElement> {
	children?: never
	variant?: LibLoaderVariant
	color?: LibAllColors
}
