import type {
    LibComponentBase,
    CssAlignContent,
    CssAlignItems,
    CssFlexDirection,
    CssFlexWrap,
    CssJustifyContent,
    CssJustifyItems,
    LibSpacers,
    ILibPadding,
} from "../../types"

export interface ILibFlexbox extends LibComponentBase<HTMLDivElement> {
    inline?: boolean
    flexDirection?: CssFlexDirection
    flexWrap?: CssFlexWrap
    justifyContent?: CssJustifyContent
    alignItems?: CssAlignItems
    justifyItems?: CssJustifyItems
    alignContent?: CssAlignContent
    gap?: LibSpacers
    columnGap?: LibSpacers
    rowGap?: LibSpacers
    padding?: ILibPadding
}
