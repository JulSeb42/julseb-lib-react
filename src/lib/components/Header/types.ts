/*=============================================== Header types ===============================================*/

import type {
    LibComponentBase,
    LibHeaderPosition,
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    LibLink,
    LibNavBurgerPosition,
    LibNavMobileVariant,
    LibHeaderLink,
    ReactChildren,
    LibHeaderVariant,
    LibColorsHover,
} from "../../types"
import type { LibHeaderLogo } from "./subtypes"

interface ILibHeaderBase extends LibComponentBase<HTMLDivElement> {
    logo: LibHeaderLogo
    variant?: LibHeaderVariant
    burgerPosition?: LibNavBurgerPosition
    burgerColor?:
        | LibColorsHover
        | { closed: LibColorsHover; open: LibColorsHover }
    navDesktopVariant?: LibNavBurgerPosition
    navMobileVariant?: LibNavMobileVariant
    enableScrollingOpen?: boolean
    search?: {
        pathname: string
        queries?: Array<Array<string>>
        icon?: LibIcon
        iconClear?: LibIcon
        iconSize?: number
        iconBaseUrl?: string
        iconClearSize?: number
        placeholder?: string
        keyboardShortcut?: Array<string>
        showKeys?: boolean
        inputBackground?: LibInputBackground
        maxWidth?: string | number
        inputVariant?: LibInputVariant
    }
}

interface HeaderNotFixed extends ILibHeaderBase {
    position?: Exclude<LibHeaderPosition, "fixed">
    hideOnScroll?: never
}

interface HeaderFixed extends ILibHeaderBase {
    position?: Extract<LibHeaderPosition, "fixed">
    hideOnScroll?: boolean | number
}

type HeaderPosition = HeaderNotFixed | HeaderFixed

type HeaderWithLinks = HeaderPosition & {
    links: Array<LibHeaderLink>
    children?: never
}

type HeaderWithChildren = HeaderPosition & {
    links?: never
    children?: ReactChildren
}

export type ILibHeader = HeaderWithLinks | HeaderWithChildren
