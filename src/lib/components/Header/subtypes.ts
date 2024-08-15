/*=============================================== Header sub components types ===============================================*/

import type { RefObject } from "react"
import type { LibHeaderLink, LibLink } from "../../types"
import type { ILibHeader } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN THOSE COMPONENTS

/*====================== HeaderNav ======================*/
export interface ILibHeaderNav
    extends Pick<
        ILibHeader,
        | "data-testid"
        | "className"
        | "search"
        | "children"
        | "links"
        | "variant"
        | "navMobileVariant"
        | "burgerPosition"
    > {
    burgerRef: RefObject<HTMLButtonElement>
    isOpen: boolean
    headerHeight: number
    handleClose: () => void
}

/*====================== HeaderBurger ======================*/
export interface ILibHeaderBurger
    extends Pick<
        ILibHeader,
        | "data-testid"
        | "className"
        | "navMobileVariant"
        | "variant"
        | "burgerColor"
    > {
    isOpen: boolean
    handleOpen: () => void
    handleClose: () => void
}

/*====================== HeaderLogo ======================*/
export interface ILibHeaderLogo
    extends Pick<
        ILibHeader,
        "data-testid" | "className" | "logo" | "children"
    > {
    isOpen: boolean
}

/*====================== HeaderNavLink ======================*/
export interface ILibHeaderNavLink {
    "data-testid": string | undefined
    className: string | undefined
    link: LibHeaderLink
}

/*====================== HeaderSearch ======================*/
export interface ILibHeaderSearch
    extends Pick<ILibHeader, "data-testid" | "className" | "search"> {
    handleClose: () => void
}

/*====================== HeaderNav ======================*/

type HeaderLogoWithText = LibLink & {
    text: string
    img?: never
    imgOpen?: never
    alt?: never
    width?: never
    height?: never
}

type HeaderLogoWithImg = LibLink & {
    text?: never
    img: string
    imgOpen?: string
    alt?: string
    width?: number
    height?: number
}

export type LibHeaderLogo = string | HeaderLogoWithText | HeaderLogoWithImg
