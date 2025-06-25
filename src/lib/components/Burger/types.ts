import type { LibColorsHover, LibComponentBase } from "../../types"

export interface ILibBurger extends LibComponentBase<HTMLButtonElement> {
	children?: never
	isOpen: boolean
	color?: LibColorsHover
}
