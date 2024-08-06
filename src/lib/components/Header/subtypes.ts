/*=============================================== Header sub components types ===============================================*/

import type { RefObject } from "react"
import type { LibHeaderLink } from "../../types"
import type { ILibHeader } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN THOSE COMPONENTS

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

export interface ILibHeaderLogo
    extends Pick<
        ILibHeader,
        "data-testid" | "className" | "logo" | "children"
    > {
    isOpen: boolean
}

export interface ILibHeaderNavLink {
    "data-testid": string | undefined
    className: string | undefined
    link: LibHeaderLink
}

export interface ILibHeaderSearch
    extends Pick<ILibHeader, "data-testid" | "className" | "search"> {
    handleClose: () => void
}
