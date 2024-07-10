/*=============================================== HighlightPreview ===============================================*/

import { Highlight } from "../../../"
import type { HighlightProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const highlightPreview: ComponentPreview<HighlightProps> = {
    name: "Highlight",
    component: Highlight,
    category: "components",
    imports: "Highlight",
    typeImports: "HighlightProps",
    extends: "TextProps",
    props: [
        {
            previewTitle: "Default",
            highlightedText: "hello",
            children: "Hello world",
        },
    ],
}
