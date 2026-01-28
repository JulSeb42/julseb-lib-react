import type {
	LibAllColors,
	LibAsideSize,
	LibComponentBase,
	LibSpacers,
} from "../../types"

export interface ILibAside extends LibComponentBase<HTMLDivElement> {
	size?: LibAsideSize
	backgroundColor?: LibAllColors
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
}
