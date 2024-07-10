/*=============================================== BadgePreview ===============================================*/

import { Badge } from "../../../"
import {  } from "../../../types"
import type { BadgeProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const badgePreview: ComponentPreview<BadgeProps, typeof Badge> = {
    name: "Badge",
    component: Badge,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
