/*=============================================== ResetScrollPreview ===============================================*/

import { ResetScroll, Text } from "../../../"
import type { ComponentPreview } from "../../../../data/components"

export const resetScrollPreview: ComponentPreview<null> = {
    name: "ResetScroll",
    component: ResetScroll,
    category: "helpers",
    import: "ResetScroll",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibResetScroll",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", demo: <Text>Demo impossible here.</Text> },
    ],
}
