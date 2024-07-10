/*=============================================== RatingPreview ===============================================*/

import { Rating } from "../../../"
import {  } from "../../../types"
import type { RatingProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const ratingPreview: ComponentPreview<RatingProps, typeof Rating> = {
    name: "Rating",
    component: Rating,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
