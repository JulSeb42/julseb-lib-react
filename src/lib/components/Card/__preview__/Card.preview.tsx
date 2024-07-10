/*=============================================== CardPreview ===============================================*/

import { Card } from "../../../"
import {  } from "../../../types"
import type { CardProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const cardPreview: ComponentPreview<CardProps, typeof Card> = {
    name: "Card",
    component: Card,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
