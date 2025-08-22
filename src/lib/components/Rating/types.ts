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
