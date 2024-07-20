/*=============================================== RatingPreview ===============================================*/

import { useState } from "react"
import { Rating } from "../../../"
import type {} from "../../../types"
import type { ILibRating } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const ratingPreview: ComponentPreview<ILibRating> = {
    name: "Rating",
    component: Rating,
    category: "components",
    import: "Rating",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibRating",
    additionalTypeImports: [],
    extends: [
        "HTMLDivElement",
        'Omit<ILibInputBase, "inputVariant" | "inputBackground">',
    ],
    previews: [
        { previewTitle: "Default", demo: <RatingDemo /> },
        {
            previewTitle: "With different icons",
            demo: (
                <RatingDemo
                    icons={{ default: "heart", checked: "heart-full" }}
                />
            ),
        },
        { previewTitle: "Read only", props: { rating: 3, readOnly: true } },
    ],
}

function RatingDemo({ ...rest }: Partial<Omit<ILibRating, "readOnly">>) {
    const [rating, setRating] = useState(3)

    return <Rating {...rest} rating={rating} setRating={setRating} />
}
