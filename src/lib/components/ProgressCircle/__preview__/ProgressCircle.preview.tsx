/*=============================================== ProgressCirclePreview ===============================================*/

import { ProgressCircle, getRandomNumber } from "../../../"
import type { ILibProgressCircle } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressCirclePreview: ComponentPreview<ILibProgressCircle> = {
    name: "ProgressCircle",
    component: ProgressCircle,
    category: "components",
    import: "ProgressCircle",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibProgressCircle",
    additionalTypeImports: null,
    extends: ["HTMLSvgElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                value: getRandomNumber(),
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Different color",
            props: {
                value: getRandomNumber(),
                color: "secondary",
                showValue: true,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Without animation",
            props: {
                value: getRandomNumber(),
                animated: false,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With icon",
            props: {
                value: getRandomNumber(),
                icon: "check",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
