/*=============================================== Footer types ===============================================*/

import type {
    LibComponentBase,
    LibFooterDirection,
    LibFooterLink,
    ReactChildren,
    RequireAtLeastOne,
    LibFooterLinksSeparator,
} from "../../types"

/*====================== Footer Content ======================*/

interface FooterWithLogoImg {
    img: string
    alt?: string
    width?: number
    height?: number
    text?: never
}

interface FooterWithLogoText {
    img?: never
    alt?: string
    width?: number
    height?: number
    text: string
}

type LibFooterLogo = FooterWithLogoImg | FooterWithLogoText

/*====================== Footer component ======================*/

interface ILibFooterBase extends LibComponentBase<HTMLDivElement> {
    withSeparator?: boolean
    linksSeparator?: LibFooterLinksSeparator
}

interface FooterHorizontalWithItems extends ILibFooterBase {
    items: Array<LibFooterLink>
    logo: LibFooterLogo
    direction?: Extract<LibFooterDirection, "horizontal">
    children?: never
}

interface FooterHorizontalWithChildren extends ILibFooterBase {
    items?: never
    logo: LibFooterLogo
    direction?: Extract<LibFooterDirection, "horizontal">
    children: ReactChildren
}

type LibFooterHorizontal =
    | FooterHorizontalWithItems
    | FooterHorizontalWithChildren

interface FooterVerticalWithItems extends ILibFooterBase {
    items?: Array<LibFooterLink>
    logo?: LibFooterLogo
    direction?: Extract<LibFooterDirection, "vertical">
    children?: never
}

interface FooterVerticalWithChildren extends ILibFooterBase {
    items?: never
    logo?: LibFooterLogo
    direction?: Extract<LibFooterDirection, "vertical">
    children?: ReactChildren
}

type LibFooterVertical = RequireAtLeastOne<
    FooterVerticalWithItems | FooterVerticalWithChildren,
    "items" | "children" | "logo"
>

export type ILibFooter = LibFooterHorizontal | LibFooterVertical
