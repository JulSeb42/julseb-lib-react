/*=============================================== TooltipPreview ===============================================*/

import { Tooltip, Text } from "../../../"
import {} from "../../../types"
import type { ILibTooltip } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tooltipPreview: ComponentPreview<ILibTooltip> = {
    name: "Tooltip",
    component: Tooltip,
    category: "components",
    import: "Tooltip",
    additionalImports: null,
    optionalImports: null,
    propsImport: "TooltipProps",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Click",
            props: {
                tooltip: "Hello World!",
                trigger: "click",
                children: <Text>Hello, trigger on click</Text>,
            },
        },
        {
            previewTitle: "Hover",
            props: {
                tooltip: "Hello World!",
                trigger: "hover",
                withArrow: false,
                position: "bottom",
                children: "Hello, trigger on hover",
            },
        },
    ],
}
