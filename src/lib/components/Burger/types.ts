import type { ButtonHTMLAttributes } from "react"
import type { LibColorsHover, LibComponentBase } from "../../types"

export interface ILibBurger
	extends LibComponentBase<HTMLButtonElement>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	children?: never
	isOpen: boolean
	color?: LibColorsHover
	noHover?: boolean
}
