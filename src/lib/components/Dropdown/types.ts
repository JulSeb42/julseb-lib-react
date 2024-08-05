/*=============================================== Dropdown types ===============================================*/

import type { ButtonHTMLAttributes } from "react"
import type {
    LibDropdownItem,
    LibColorsHover,
    LibComponentBase,
    LibInputListDirection,
    ReactChildren,
    DispatchState,
    LibShadows,
    LibButtonLinkBlankRequired,
    LibIcon,
    LibSpacers,
} from "../../types"

/*====================== Dropdown ======================*/

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
    children?: ReactChildren
}

export type ILibDropdown = DropdownWithItems | DropdownWithChildren

/*====================== DropdownItem ======================*/

type ILibDropdownItemBase = LibComponentBase<
    HTMLButtonElement & HTMLAnchorElement
> &
    ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> &
    LibButtonLinkBlankRequired & {
        accentColor?: LibColorsHover

        gap?: LibSpacers
    }

type DropdownItemWithIcon = ILibDropdownItemBase & {
    icon?: LibIcon
    iconSize?: number
    iconBaseUrl?: string
}

type DropdownItemWithoutIcon = ILibDropdownItemBase & {
    icon?: undefined | null
    iconSize?: never
    iconBaseUrl?: never
}

export type ILibDropdownItem = DropdownItemWithIcon | DropdownItemWithoutIcon
