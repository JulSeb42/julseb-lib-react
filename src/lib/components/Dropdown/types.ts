/*=============================================== Dropdown types ===============================================*/

import type {
    LibDropdownItem,
    LibColorsHover,
    LibComponentBase,
    LibInputListDirection,
    ReactChildren,
    DispatchState,
    LibShadows,
} from "../../types"

interface ILibDropdownBase extends LibComponentBase<HTMLDivElement> {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    accentColor?: LibColorsHover
    direction?: LibInputListDirection
    maxHeightOpen?: number
    positionFromButton?: number
    shadow?: LibShadows | null
}

interface DropdownWithItems extends ILibDropdownBase {
    items: Array<LibDropdownItem>
    children?: never
}

interface DropdownWithChildren extends ILibDropdownBase {
    items?: never
    children: ReactChildren
}

export type ILibDropdown = DropdownWithItems | DropdownWithChildren
