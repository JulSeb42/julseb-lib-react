/*=============================================== HelmetPreview ===============================================*/

import { Helmet } from "../../../"
import type {} from "../../../types"
import type { ILibHelmet } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const helmetPreview: ComponentPreview<ILibHelmet> = {
    name: "Helmet",
    component: Helmet as any,
    category: "components",
    import: "Helmet", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibHelmet", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                title: "Hello Helmet title",
                keywords: ["foo", "baz", "bar"],
            },
        },
    ],
}
