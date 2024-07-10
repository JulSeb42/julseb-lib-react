/*=============================================== TooltipPreview ===============================================*/

import { Tooltip } from "../../../"
import {  } from "../../../types"
import type { TooltipProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tooltipPreview: ComponentPreview<TooltipProps, typeof Tooltip> = {
    name: "Tooltip",
    component: Tooltip,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
