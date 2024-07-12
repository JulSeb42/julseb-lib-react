/*=============================================== HighlightPreview ===============================================*/

import { Highlight } from "../../../"
import type { ILibHighlight } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const highlightPreview: ComponentPreview<ILibHighlight> = {
    name: "Highlight",
    component: Highlight,
    category: "components",
    import: "Highlight",
    additionalImports: null,
    optionalImports: null,
    propsImport: "HighlightProps",
    additionalTypeImports: null,
    extends: ["TextProps"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                highlightedText: "hello",
                children: "Hello world",
            },
        },
    ],
}
