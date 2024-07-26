/*=============================================== IconMenu types ===============================================*/

import type {
    LibComponentBase,
    LibIconMenuItem,
    LibIconMenuDirection,
    LibColorsHover,
    ReactChildren,
    LibIcon,
    LibIconMenuIcon,
    ILibPosition,
    LibButtonIconVariant,
} from "../../types"
import type { ILibButtonIcon } from "../ButtonIcon/types"

/*====================== IconMenu ======================*/

interface ILibIconMenuBase extends LibComponentBase<HTMLDivElement> {
    direction?: LibIconMenuDirection
    color?: LibColorsHover
    position?: ILibPosition
    showTooltips?: boolean
    buttonsVariant?: LibButtonIconVariant
    icon?:
        | LibIconMenuIcon
        | {
              open: LibIcon
              close: LibIcon
              openSize?: number
              closeSize?: number
          }
}

interface IconMenuWithItems extends ILibIconMenuBase {
    items: Array<LibIconMenuItem>
    children?: never
}

interface IconMenuWithChildren extends ILibIconMenuBase {
    items?: never
    children?: ReactChildren
}

export type ILibIconMenu = IconMenuWithItems | IconMenuWithChildren

/*====================== IconMenu ======================*/

export type ILibIconMenuItem = ILibButtonIcon &
    LibIconMenuItem & {
        indexPosition: number
        isOpen: boolean
        direction?: LibIconMenuDirection
        variant?: LibButtonIconVariant
    }
