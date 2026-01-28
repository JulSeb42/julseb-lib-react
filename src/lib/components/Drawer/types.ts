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
	/**
	 * The space between items.
	 *
	 * Possible values:
	 * - 2xs: 4px
	 * - xs: 8px
	 * - sm: 12px
	 * - md: 16px
	 * - lg: 24px
	 * - xl: 32px
	 * - 2xl: 48px
	 */
	gap?: LibSpacers
	maxWidth?: string | number
	overlayColor?: LibAllColorsAndOverlays
	hideCloseButton?: boolean
}
