/*=============================================== BreadcrumbsPreview ===============================================*/

import { Breadcrumbs } from "../../../"
import type { LibBreadcrumbItem } from "../../../types"
import type { ILibBreadcrumbs } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const breadcrumbsItems: Array<LibBreadcrumbItem> = [
    {
        text: "Link",
        to: "/",
    },
    {
        text: "Link",
        to: "#",
    },
    {
        text: "Link",
        to: "#",
    },
    {
        text: "Active",
    },
]

export const breadcrumbsPreview: ComponentPreview<ILibBreadcrumbs> = {
    name: "Breadcrumbs",
    component: Breadcrumbs,
    category: "components",
    import: "Breadcrumbs", // import Component (ex: Skeleton)
    additionalImports: null, // import OtherComponent (ex: SkeletonCard)
    optionalImports: null, // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibBreadcrumbs", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: null, // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { breadcrumbsItems } },
        {
            previewTitle: "With different colors",
            props: {
                breadcrumbsItems,
                linksColor: "secondary",
                activeColor: "success",
                separatorColor: "danger",
            },
        },
        {
            previewTitle: "With different separator",
            props: { breadcrumbsItems, separator: "chevron" },
        },
    ],
}
