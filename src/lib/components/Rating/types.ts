/*=============================================== Rating types ===============================================*/

import type { LibComponentBase, LibIcon, DispatchState } from "../../types"
import type { ILibInputBase } from "../InputComponents/types"

interface ILibRatingPBase
    extends Exclude<LibComponentBase<HTMLDivElement>, "as">,
        ILibInputBase {
    rating: number
    icons?: { default?: LibIcon; checked?: LibIcon }
    iconSizes?: { default?: number; checked?: number }
    maxLength?: never
    counter?: never
    inputVariant?: never
    inputBackground?: never
}

interface RatingInput extends ILibRatingPBase {
    setRating: DispatchState<number>
    readOnly?: undefined | false
}

interface RatingReadOnly extends ILibRatingPBase {
    setRating?: never | undefined | null
    readOnly: true
}

export type ILibRating = RatingInput | RatingReadOnly
