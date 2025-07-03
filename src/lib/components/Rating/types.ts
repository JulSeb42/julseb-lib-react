import type { DispatchState, LibComponentBase, ReactElement } from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

type ILibRatingBase = Omit<LibComponentBase<HTMLDivElement>, "element"> &
	Omit<ILibInputCommon, "inputVariant" | "inputBackground"> &
	ILibInputWithValidation & {
		rating: number
		icons?: { default?: ReactElement; checked?: ReactElement }
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
