import type {
	ClassNames,
	LibAllColors,
	LibComponentBase,
	LibLoaderVariant,
} from "../../types"

export type ILibLoader = LibComponentBase<HTMLSpanElement> & {
	children?: never
	variant?: LibLoaderVariant
	color?: LibAllColors
	className?: ClassNames
}
