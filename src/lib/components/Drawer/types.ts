import type {
    DispatchState,
    LibAllColors,
    LibAllColorsAndOverlays,
    LibColorsHover,
    LibComponentBase,
    LibSpacers,
    LibDrawerPosition,
    ILibPadding,
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
    width?: string | number
    zIndex?: number
    overlayColor?: LibAllColorsAndOverlays
    padding?: ILibPadding
}
