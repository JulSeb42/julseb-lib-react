/*=============================================== HighlightPreview ===============================================*/

import { Highlight } from "../../../"
import {  } from "../../../types"
import type { HighlightProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const highlightPreview: ComponentPreview<HighlightProps, typeof Highlight> = {
    name: "Highlight",
    component: Highlight,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
