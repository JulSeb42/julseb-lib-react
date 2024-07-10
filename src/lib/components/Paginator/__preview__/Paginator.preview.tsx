/*=============================================== PaginatorPreview ===============================================*/

import { Paginator } from "../../../"
import {  } from "../../../types"
import type { PaginatorProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const paginatorPreview: ComponentPreview<PaginatorProps, typeof Paginator> = {
    name: "Paginator",
    component: Paginator,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
