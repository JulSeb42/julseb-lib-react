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
	/** Set display as `inline-flex` */
	inline?: boolean
	flexDirection?: CssFlexDirection
	flexWrap?: CssFlexWrap
	justifyContent?: CssJustifyContent
	alignItems?: CssAlignItems
	justifyItems?: CssJustifyItems
	alignContent?: CssAlignContent
	/**
	 * The space between flex items.
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
	 * The column space between flex items.
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
	 * The row space between flex items.
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
}
