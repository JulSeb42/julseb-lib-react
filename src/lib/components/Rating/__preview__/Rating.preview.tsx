import { useState } from "react"
import { Rating } from "../../../"
import type { ILibRating } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const RatingDemo = ({ ...rest }: Partial<Omit<ILibRating, "readOnly">>) => {
    const [rating, setRating] = useState(3)

    return (
        <Rating
            {...rest}
            rating={rating}
            setRating={setRating}
            data-testid="testid"
            className="className"
        />
    )
}

export const ratingPreview: ComponentPreview<ILibRating> = {
    name: "Rating",
    component: Rating,
    category: "components",
    import: "Rating",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibRating",
    additionalTypeImports: null,
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
                    className="hello"
                />
            ),
        },
        {
            previewTitle: "Read only",
            props: {
                rating: 3,
                readOnly: true,
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
