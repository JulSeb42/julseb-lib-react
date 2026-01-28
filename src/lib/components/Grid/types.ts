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
	/**
	 * The space between column items.
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
	colGap?: LibSpacers
	/**
	 * The space between row items.
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
	rowGap?: LibSpacers
	justifyItems?: CssJustifyItems
	alignItems?: CssAlignItems
	justifyContent?: CssJustifyContent
	alignContent?: CssAlignContent
}
