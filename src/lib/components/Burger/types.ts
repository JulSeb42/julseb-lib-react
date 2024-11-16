/*=============================================== Burger types ===============================================*/

import type { LibComponentBase, LibColorsHoverAndCurrent } from "../../types"

export interface ILibBurger extends LibComponentBase<HTMLButtonElement> {
    isOpen: boolean
    color?: LibColorsHoverAndCurrent
    width?: number
    height?: number
    noHover?: boolean
    borderWidth?: number
    children?: never
}
