/*=============================================== StepperPreview ===============================================*/

import { Stepper } from "../../../"
import type { LibStep } from "../../../types"
import type { ILibStepper } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const steps: Array<LibStep> = [
    {
        text: "Step",
        to: "#",
    },
    {
        text: "Step",
        to: "#",
    },
    {
        text: "Step",
        onClick: () => alert("hello"),
    },
    {
        text: "Step",
    },
    {
        text: "Step",
    },
    {
        text: "Step",
    },
]

export const stepperPreview: ComponentPreview<ILibStepper> = {
    name: "Stepper",
    component: Stepper,
    category: "components",
    import: "Stepper", // import Component (ex: Skeleton)
    additionalImports: [], // import OtherComponent (ex: SkeletonCard)
    optionalImports: ["Step"], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibStepper", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: ["LibStep"], // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { steps, activeStep: 2 } },
        {
            previewTitle: "Column",
            props: { steps, activeStep: 2, direction: "column" },
        },
    ],
}
