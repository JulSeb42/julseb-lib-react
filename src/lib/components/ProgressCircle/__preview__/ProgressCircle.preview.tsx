/*=============================================== ProgressCirclePreview ===============================================*/

import { ProgressCircle, getRandomNumber } from "../../../"
import type {} from "../../../types"
import type { ILibProgressCircle } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressCirclePreview: ComponentPreview<ILibProgressCircle> = {
    name: "ProgressCircle",
    component: ProgressCircle,
    category: "components",
    import: "ProgressCircle",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibProgressCircle",
    additionalTypeImports: [],
    extends: ["HTMLSvgElement"],
    previews: [
        {
            previewTitle: "Default",
            props: { value: getRandomNumber() },
        },
        {
            previewTitle: "Different color",
            props: {
                value: getRandomNumber(),
                color: "secondary",
                showValue: true,
            },
        },
        {
            previewTitle: "Without animation",
            props: { value: getRandomNumber(), animated: false },
        },
        {
            previewTitle: "With icon",
            props: { value: getRandomNumber(), icon: "check" },
        },
    ],
}
