/*=============================================== Dropdown types ===============================================*/

import type {
    LibDropdownItem,
    LibColorsHover,
    LibComponentBase,
    LibListDirection,
    ReactChildren,
    DispatchState,
} from "../../types"

interface DropdownPropsBase extends LibComponentBase<HTMLDivElement> {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    accentColor?: LibColorsHover
    direction?: LibListDirection
    maxHeightOpen?: number
    positionFromButton?: number
}

interface DropdownWithItems extends DropdownPropsBase {
    items: Array<LibDropdownItem>
    children?: never
}

interface DropdownWithChildren extends DropdownPropsBase {
    items?: never
    children: ReactChildren
}

export type DropdownProps = DropdownWithItems | DropdownWithChildren
