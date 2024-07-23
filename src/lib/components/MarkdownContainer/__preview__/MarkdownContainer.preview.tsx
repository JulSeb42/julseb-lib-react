/*=============================================== MarkdownContainerPreview ===============================================*/

import { MarkdownContainer } from "../../../"
import type { ILibMarkdownContainer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const markdownContainerPreview: ComponentPreview<ILibMarkdownContainer> =
    {
        name: "MarkdownContainer",
        component: MarkdownContainer,
        category: "components",
        import: "MarkdownContainer", // import Component (ex: Skeleton)
        additionalImports: [], // import OtherComponent (ex: SkeletonCard)
        optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
        propsImport: "ILibMarkdownContainer", // import ILibComponent (ex: ILibAccordion)
        additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
        extends: ["HTMLDivElement"],
        previews: [
            {
                props: {
                    children:
                        "## Hello world \n\n I'm some markdown content **compiled** to *jsx*",
                },
            },
        ],
    }
