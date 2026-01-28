import type {
	DispatchState,
	LibColorsHover,
	LibComponentBase,
	LibSpacers,
	ReactElement,
} from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

type ILibRatingBase = Omit<LibComponentBase<HTMLDivElement>, "element"> &
	Omit<ILibInputCommon, "inputVariant" | "inputBackground"> &
	ILibInputWithValidation & {
		rating: number
		icons?: { default?: ReactElement; checked?: ReactElement }
		iconsSize?: number
		accentColor?: LibColorsHover
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
		children?: never
	}

type RatingEditable = ILibRatingBase & {
	setRating: DispatchState<number>
	readOnly?: never
}

type RatingReadOnly = ILibRatingBase & {
	setRating?: never
	readOnly?: true
}

export type ILibRating = RatingEditable | RatingReadOnly
