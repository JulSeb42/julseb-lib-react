import type { FC, ReactElement, Ref } from "react"
import type { LibHeaderLink, LibLink } from "../../types"
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
		| "nav"
		| "role"
	> {
	burgerRef: Ref<HTMLButtonElement>
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
	ref?: Ref<HTMLButtonElement>
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
	link: LibHeaderLink | ReactElement | FC
}

export interface ILibHeaderSearch
	extends Pick<ILibHeader, "data-testid" | "className" | "search"> {
	handleClose: () => void
}

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
