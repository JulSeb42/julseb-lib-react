/*=============================================== Fieldset types ===============================================*/

import type {
    CssAlignContent,
    CssAlignItems,
    CssFlexDirection,
    CssFlexWrap,
    CssJustifyContent,
    CssJustifyItems,
    ILibBorder,
    ILibPadding,
    ILibRadius,
    LibComponentBase,
    LibSpacers,
} from "../../types"

export interface ILibFieldset extends LibComponentBase<HTMLFieldSetElement> {
    legend: string
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
    border?: ILibBorder
    borderRadius?: ILibRadius
}
