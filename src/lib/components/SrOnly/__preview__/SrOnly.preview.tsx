/*=============================================== SrOnlyPreview ===============================================*/

import { SrOnly } from "../../../"
import type {} from "../../../types"
import type { ILibSrOnly } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const srOnlyPreview: ComponentPreview<ILibSrOnly> = {
    name: "SrOnly",
    component: SrOnly,
    category: "components",
    import: "SrOnly", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibSrOnly", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { children: "Hello", as: "h1" } },
    ],
}
