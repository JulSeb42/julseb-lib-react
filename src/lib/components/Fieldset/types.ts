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
import type { ILibInputBase } from "../InputComponents/types"

export interface ILibFieldset
    extends LibComponentBase<HTMLFieldSetElement>,
        Pick<ILibInputBase, "containerStyle" | "validation"> {
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
