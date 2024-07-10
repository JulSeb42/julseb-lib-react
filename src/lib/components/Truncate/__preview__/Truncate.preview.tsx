/*=============================================== TruncatePreview ===============================================*/

import { Truncate } from "../../../"
import {  } from "../../../types"
import type { TruncateProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const truncatePreview: ComponentPreview<TruncateProps, typeof Truncate> = {
    name: "Truncate",
    component: Truncate,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
