import type {
	DispatchState,
	LibAllColors,
	LibAllColorsAndOverlays,
	LibColorsHover,
	LibComponentBase,
	LibDrawerPosition,
	LibSpacers,
} from "../../types"

export interface ILibDrawer extends LibComponentBase<HTMLDivElement> {
	isOpen: boolean
	setIsOpen: DispatchState<boolean>
	position?: LibDrawerPosition
	enableScrollingOpen?: boolean
	disableEsc?: boolean
	backgroundColor?: LibAllColors
	contentColor?: LibAllColors
	linksColor?: LibColorsHover
	gap?: LibSpacers
	maxWidth?: string | number
	overlayColor?: LibAllColorsAndOverlays
	hideCloseButton?: boolean
}
