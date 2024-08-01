/*=============================================== TooltipPreview ===============================================*/

import { Tooltip, Text } from "../../../"
import type { ILibTooltip } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const tooltipPreview: ComponentPreview<ILibTooltip> = {
    name: "Tooltip",
    component: Tooltip,
    category: "components",
    import: "Tooltip",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibTooltip",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Click",
            props: {
                tooltip: "Hello World!",
                trigger: "click",
                children: <Text>Hello, trigger on click</Text>,
                "data-testid": "testid",
                className: "className",
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
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Left",
            props: {
                tooltip: "Hello World!",
                position: "left",
                children: "Hello tooltip left",
                offset: -8,
            },
        },
        {
            previewTitle: "Right",
            props: {
                tooltip: "Hello World!",
                position: "right",
                children: "Hello tooltip right",
                offset: -20,
            },
        },
    ],
}
