/*=============================================== Rating types ===============================================*/

import type { LibComponentBase, LibIcon, DispatchState } from "../../types"
import type { InputBaseProps } from "../InputComponents/types"

interface RatingPropsBase
    extends Exclude<LibComponentBase<HTMLDivElement>, "as">,
        InputBaseProps {
    rating: number
    icons?: { default?: LibIcon; checked?: LibIcon }
    iconSizes?: { default?: number; checked?: number }
    maxLength?: never
    counter?: never
    inputVariant?: never
    inputBackground?: never
}

interface RatingPropsBehaviour extends RatingPropsBase {
    setRating: DispatchState<number>
    readOnly?: undefined | false
}

interface RatingPropsReadOnly extends RatingPropsBase {
    setRating?: never | undefined | null
    readOnly: true
}

export type RatingProps = RatingPropsBehaviour | RatingPropsReadOnly
