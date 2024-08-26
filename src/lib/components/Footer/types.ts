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
    alt?: never
    width?: never
    height?: never
    text: string
}

type LibFooterLogo = FooterWithLogoImg | FooterWithLogoText

/*====================== Footer component ======================*/

interface ILibFooterBase extends LibComponentBase<HTMLDivElement> {
    withSeparator?: boolean
    linksSeparator?: LibFooterLinksSeparator
}

interface FooterHorizontalWithItems extends ILibFooterBase {
    links: Array<LibFooterLink>
    logo: string | LibFooterLogo
    direction?: Extract<LibFooterDirection, "horizontal">
    children?: never
}

interface FooterHorizontalWithChildren extends ILibFooterBase {
    links?: never
    logo: LibFooterLogo
    direction?: Extract<LibFooterDirection, "horizontal">
    children?: ReactChildren
}

type LibFooterHorizontal =
    | FooterHorizontalWithItems
    | FooterHorizontalWithChildren

interface FooterVerticalWithItems extends ILibFooterBase {
    links?: Array<LibFooterLink>
    logo?: LibFooterLogo
    direction?: Extract<LibFooterDirection, "vertical">
    children?: never
}

interface FooterVerticalWithChildren extends ILibFooterBase {
    links?: never
    logo?: LibFooterLogo
    direction?: Extract<LibFooterDirection, "vertical">
    children?: ReactChildren
}

type LibFooterVertical = RequireAtLeastOne<
    FooterVerticalWithItems | FooterVerticalWithChildren,
    "links" | "children" | "logo"
>

export type ILibFooter = LibFooterHorizontal | LibFooterVertical
