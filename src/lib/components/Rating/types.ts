/*=============================================== Rating types ===============================================*/

import type { LibComponentBase, LibIcon, DispatchState } from "../../types"
import type { ILibInputBase } from "../InputComponents/types"

type ILibRatingBase = Exclude<LibComponentBase<HTMLDivElement>, "as"> &
    Omit<ILibInputBase, "inputVariant" | "inputBackground"> & {
        rating: number
        icons?: { default?: LibIcon; checked?: LibIcon }
        iconSizes?: { default?: number; checked?: number }
        iconBaseUrl?: string
    }

interface RatingInput extends ILibRatingBase {
    setRating: DispatchState<number>
    readOnly?: undefined | false
}

interface RatingReadOnly extends ILibRatingBase {
    setRating?: never | undefined | null
    readOnly: true
}

export type ILibRating = RatingInput | RatingReadOnly
