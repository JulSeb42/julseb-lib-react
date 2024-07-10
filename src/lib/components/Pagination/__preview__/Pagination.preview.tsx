/*=============================================== PaginationPreview ===============================================*/

import { Pagination } from "../../../"
import {  } from "../../../types"
import type { PaginationProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const paginationPreview: ComponentPreview<PaginationProps, typeof Pagination> = {
    name: "Pagination",
    component: Pagination,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
