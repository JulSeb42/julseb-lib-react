/*=============================================== TooltipPreview ===============================================*/

import { Tooltip, Text } from "../../../"
import {} from "../../../types"
import type { TooltipProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tooltipPreview: ComponentPreview<TooltipProps, typeof Tooltip> = {
    name: "Tooltip",
    component: Tooltip,
    category: "components",
    props: [
        {
            previewTitle: "Click",
            tooltip: "Hello World!",
            trigger: "click",
            children: <Text>Hello, trigger on click</Text>,
        },
        {
            previewTitle: "Hover",
            tooltip: "Hello World!",
            trigger: "hover",
            withArrow: false,
            position: "bottom",
            children: "Hello, trigger on hover",
        },
    ],
}
