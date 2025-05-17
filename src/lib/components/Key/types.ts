import type { LibColorsShort, LibComponentBase, LibKeySize } from "../../types"

export interface ILibKey extends LibComponentBase<HTMLSpanElement> {
	keys: Array<string>
	withSeparator?: boolean
	size?: LibKeySize
	accentColor?: Exclude<
		LibColorsShort,
		"black" | "white" | "transparent" | "background" | "current"
	>
	children?: never
}
