import { Linkify } from "../../../"
import type {  } from "../../../types"
import type { ILibLinkify } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const linkifyPreview: ComponentPreview<ILibLinkify> = {
    name: "Linkify",
    component: Linkify,
    category: "components",
    import: "Linkify", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibLinkify", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
    extends: ["HTMLHeadingElement"],
    previews: [
        { previewTitle: "Default", props: {  } },
        { previewTitle: "Default", demo: <Linkify /> },
    ],
}
