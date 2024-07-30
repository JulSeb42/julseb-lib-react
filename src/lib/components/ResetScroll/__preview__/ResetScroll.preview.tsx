/*=============================================== ResetScrollPreview ===============================================*/

import { ResetScroll, Text } from "../../../"
import type { ComponentPreview } from "../../../../data/components"

export const resetScrollPreview: ComponentPreview<null> = {
    name: "ResetScroll",
    component: ResetScroll,
    category: "helpers",
    import: "ResetScroll",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibResetScroll",
    additionalTypeImports: [],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", demo: <Text>Demo impossible here.</Text> },
    ],
}
