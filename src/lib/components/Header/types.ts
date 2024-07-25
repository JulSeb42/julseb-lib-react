/*=============================================== Header types ===============================================*/

import type {
    LibComponentBase,
    LibHeaderPosition,
    LibIcon,
    LibInputBackground,
    LibInputVariant,
    LibLink,
    LibNavMenuVariant,
    LibNavMobileVariant,
    LibHeaderLink,
    ReactChildren,
    LibHeaderVariant,
} from "../../types"

type LogoWithText = LibLink & {
    text: string
    img?: never
    alt?: never
    width?: never
    height?: never
}

type LogoWithImg = LibLink & {
    text?: never
    img: string
    alt?: string
    width?: number
    height?: number
}

interface ILibHeaderBase extends LibComponentBase<HTMLDivElement> {
    logo: string | LogoWithText | LogoWithImg
    variant?: LibHeaderVariant
    burgerPosition?: LibNavMenuVariant
    navDesktopVariant?: LibNavMenuVariant
    navMobileVariant?: LibNavMobileVariant
    search?: {
        pathname: string
        queries?: Array<Array<string>>
        icon?: LibIcon
        iconClear?: LibIcon
        iconSize?: number
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
