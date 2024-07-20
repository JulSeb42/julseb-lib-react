/*=============================================== ProgressCirclePreview ===============================================*/

import { ProgressCircle, getRandomNumber } from "../../../"
import type {} from "../../../types"
import type { ILibProgressCircle } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressCirclePreview: ComponentPreview<ILibProgressCircle> = {
    name: "ProgressCircle",
    component: ProgressCircle,
    category: "components",
    import: "ProgressCircle", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibProgressCircle", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
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
