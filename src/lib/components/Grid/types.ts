import type {
	LibComponentBase,
	LibSpacers,
	CssJustifyItems,
	CssAlignItems,
	CssJustifyContent,
	CssAlignContent,
} from "../../types"

export interface ILibGrid extends LibComponentBase<HTMLDivElement> {
	inline?: boolean
	cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	gap?: LibSpacers
	colGap?: LibSpacers
	rowGap?: LibSpacers
	justifyItems?: CssJustifyItems
	alignItems?: CssAlignItems
	justifyContent?: CssJustifyContent
	alignContent?: CssAlignContent
}
