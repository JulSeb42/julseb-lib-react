import type {
    CssAlignContent,
    CssAlignItems,
    CssJustifyContent,
    CssJustifyItems,
    LibComponentBase,
    LibSpacers,
    ILibPadding,
} from "../../types"

export interface ILibGrid extends LibComponentBase<HTMLDivElement> {
    inline?: boolean
    col?: number | string
    gap?: LibSpacers
    columnGap?: LibSpacers
    rowGap?: LibSpacers
    justifyItems?: CssJustifyItems
    alignItems?: CssAlignItems
    justifyContent?: CssJustifyContent
    alignContent?: CssAlignContent
    padding?: ILibPadding
}
