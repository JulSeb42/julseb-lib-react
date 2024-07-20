/*=============================================== ProgressBarPreview ===============================================*/

import { ProgressBar, getRandomNumber } from "../../../"
import { typeValues } from "../../../types"
import type { ILibProgressBar } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const progressBarPreview: ComponentPreview<ILibProgressBar> = {
    name: "ProgressBar",
    component: ProgressBar,
    category: "components",
    import: "ProgressBar", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibProgressBar", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: [], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: Object.values(typeValues.colorsHover).map(c => ({
        previewTitle: `Color ${c}`,
        props: { value: getRandomNumber(), color: c },
    })),
}
