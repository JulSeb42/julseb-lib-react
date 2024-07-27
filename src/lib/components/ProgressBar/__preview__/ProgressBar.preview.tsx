/*=============================================== ProgressBarPreview ===============================================*/

import { ProgressBar, getRandomNumber } from "../../../"
import { typeValues } from "../../../types"
import type { ILibProgressBar } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressBarPreview: ComponentPreview<ILibProgressBar> = {
    name: "ProgressBar",
    component: ProgressBar,
    category: "components",
    import: "ProgressBar",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibProgressBar",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: Object.values(typeValues.colorsHover).map(c => ({
        previewTitle: `Color ${c}`,
        props: {
            value: getRandomNumber(),
            color: c,
            "data-testid": "testid",
            className: "className",
        },
    })),
}
