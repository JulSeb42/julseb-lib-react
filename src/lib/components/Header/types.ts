import type {
	LibColorsHover,
	LibComponentBase,
	LibNavBurgerPosition,
	LibNavMobileVariant,
	ReactChildren,
	LibHeaderPosition,
	LibAllColors,
} from "../../types"
import type { LibHeaderSearch } from "./subtypes"

interface ILibHeaderBase extends LibComponentBase<HTMLDivElement> {
	logo: ReactChildren
	burgerPosition?: LibNavBurgerPosition
	burgerColor?:
		| LibColorsHover
		| { open?: LibColorsHover; closed?: LibColorsHover }
	navDesktopPosition?: LibNavBurgerPosition
	navMobileVariant?: LibNavMobileVariant
	enableScrollingOpen?: boolean
	search?: LibHeaderSearch
	backgroundColor?: LibAllColors
	textColor?: LibAllColors
	linksColor?: LibColorsHover
}

interface HeaderFixed extends ILibHeaderBase {
	position?: Extract<LibHeaderPosition, "fixed">
	hideOnScroll?: boolean | number
}

interface HeaderNotFixed extends ILibHeaderBase {
	position?: Exclude<LibHeaderPosition, "fixed">
	hideOnScroll?: never
}

type ILibHeaderPosition = HeaderFixed | HeaderNotFixed

type HeaderWithLinks = ILibHeaderPosition & {
	links: Array<ReactChildren>
	nav?: never
	children?: never
}

type HeaderWithNav = ILibHeaderPosition & {
	links?: never
	nav: ReactChildren
	children?: never
}

type HeaderWithChildren = ILibHeaderPosition & {
	links?: never
	nav?: never
	children: ReactChildren
}

export type ILibHeader = HeaderWithLinks | HeaderWithNav | HeaderWithChildren
