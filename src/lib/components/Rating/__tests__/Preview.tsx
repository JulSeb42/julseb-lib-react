/*=============================================== Rating preview ===============================================*/

import { useState } from "react"
import { Rating } from "../Rating"

export function Preview() {
    const [rating, setRating] = useState(1)

    return (
        <Rating
            rating={rating}
            setRating={setRating}
            data-testid="testid"
            className="className"
        />
    )
}

export function PreviewReadOnly() {
    return (
        <Rating
            rating={3}
            readOnly
            data-testid="testid"
            className="className"
        />
    )
}
