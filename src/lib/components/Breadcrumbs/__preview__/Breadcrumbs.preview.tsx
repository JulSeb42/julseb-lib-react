/*=============================================== BreadcrumbsPreview ===============================================*/

import { Breadcrumbs } from "../../../"
import {  } from "../../../types"
import type { BreadcrumbsProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const breadcrumbsPreview: ComponentPreview<BreadcrumbsProps, typeof Breadcrumbs> = {
    name: "Breadcrumbs",
    component: Breadcrumbs,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
