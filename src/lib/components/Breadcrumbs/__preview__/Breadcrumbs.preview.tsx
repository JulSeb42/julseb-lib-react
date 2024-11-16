/*=============================================== BreadcrumbsPreview ===============================================*/

import { Breadcrumbs } from "../../../"
import type { LibBreadcrumbItem } from "../../../types"
import type { ILibBreadcrumbs } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items: Array<LibBreadcrumbItem> = [
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
    import: "Breadcrumbs",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibBreadcrumbs",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                items,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With different colors",
            props: {
                items,
                linksColor: "secondary",
                activeColor: "success",
                separatorColor: "danger",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With different separator",
            props: {
                items,
                separator: "chevron",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
