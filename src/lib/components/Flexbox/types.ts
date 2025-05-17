import type {
	CssAlignContent,
	CssAlignItems,
	CssFlexDirection,
	CssFlexWrap,
	CssJustifyContent,
	CssJustifyItems,
	LibComponentBase,
	LibSpacers,
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
	colGap?: LibSpacers
	rowGap?: LibSpacers
}
