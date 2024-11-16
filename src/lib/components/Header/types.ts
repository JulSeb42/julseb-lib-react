/*=============================================== Header types ===============================================*/

import type {
    LibComponentBase,
    LibHeaderPosition,
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    LibNavBurgerPosition,
    LibNavMobileVariant,
    LibHeaderLink,
    ReactChildren,
    LibHeaderVariant,
    LibColorsHover,
    LibAllColors,
} from "../../types"
import type { LibHeaderLogo } from "./subtypes"

interface ILibHeaderBase extends LibComponentBase<HTMLDivElement> {
    logo: LibHeaderLogo
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
        iconLeft?: LibIcon
        iconLeftSize?: number
        iconClear?: LibIcon
        iconClearSize?: number
        iconBaseUrl?: string
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
    links: Array<LibHeaderLink | JSX.Element>
    nav?: never
    children?: never
}

type HeaderWithNav = HeaderPosition & {
    links: Array<LibHeaderLink | JSX.Element>
    nav?: ReactChildren
    children?: never
}

type HeaderWithChildren = HeaderPosition & {
    links?: never
    nav?: never
    children?: ReactChildren
}

type LibHeaderChildren = HeaderWithLinks | HeaderWithNav | HeaderWithChildren

type HeaderWithBackground = LibHeaderChildren & {
    variant?: Extract<LibHeaderVariant, "primary">
    backgroundColor?: LibAllColors
    textColor?: LibAllColors
    linkColor?: LibColorsHover
}

type HeaderWithoutBackground = LibHeaderChildren & {
    variant?: Exclude<LibHeaderVariant, "primary">
    backgroundColor?: never
    textColor?: never
    linkColor?: never
}

export type ILibHeader = HeaderWithBackground | HeaderWithoutBackground
