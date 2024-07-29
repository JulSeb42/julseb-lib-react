/*=============================================== ResetScrollPreview ===============================================*/

import { ResetScroll, Text } from "../../../"
import type { ComponentPreview } from "../../../../data/components"

export const resetScrollPreview: ComponentPreview<null> = {
    name: "ResetScroll",
    component: ResetScroll,
    category: "helpers",
    import: "ResetScroll", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibResetScroll", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", demo: <Text>Demo impossible here.</Text> },
    ],
}
