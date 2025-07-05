import type { LibColorsShort, LibComponentBase } from "../../types"

export interface ILibAlert extends LibComponentBase<HTMLDivElement> {
	color?: Exclude<
		LibColorsShort,
		"transparent" | "black" | "white" | "current" | "background"
	>
}
