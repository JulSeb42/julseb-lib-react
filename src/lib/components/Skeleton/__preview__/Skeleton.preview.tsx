/*=============================================== SkeletonPreview ===============================================*/

import { Skeleton } from "../../../"
import {  } from "../../../types"
import type { SkeletonProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const skeletonPreview: ComponentPreview<SkeletonProps, typeof Skeleton> = {
    name: "Skeleton",
    component: Skeleton,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
