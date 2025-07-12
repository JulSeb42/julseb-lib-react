import type {
	LibColorsShort,
	LibComponentBase,
	LibKeySize,
	ReactChildren,
} from "../../types"

export interface ILibKey extends LibComponentBase<HTMLSpanElement> {
	children?: ReactChildren
	withSeparator?: boolean
	size?: LibKeySize
	accentColor?: Exclude<
		LibColorsShort,
		"black" | "white" | "transparent" | "background" | "current"
	>
}
