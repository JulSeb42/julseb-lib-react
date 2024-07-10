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
    ],
    demos: [
        {
            previewTitle: "Hover",
            element: (
                <Tooltip
                    tooltip="Hello World!"
                    position="bottom"
                    withArrow={false}
                >
                    Hello
                </Tooltip>
            ),
        },
    ],
}

{
    /* <Tooltip tooltip="Hello World!" trigger="click">
    <Text>Hello, trigger on click</Text>
</Tooltip>

<Tooltip tooltip="Hello World!" position="bottom" withArrow={false}>
    Hello
</Tooltip> */
}
