import type { LibComponentBase, LibSpacers } from "../../types"

export interface ILibMasonry extends LibComponentBase<HTMLDivElement> {
	col?: number
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
	/**
	 * The space between col items.
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
}
