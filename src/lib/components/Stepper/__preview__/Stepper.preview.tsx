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
    import: "Stepper",
    additionalImports: [],
    optionalImports: ["Step"],
    propsImport: "ILibStepper",
    additionalTypeImports: ["LibStep"],
    extends: ["HTMLDivElement"],
    previews: [
        { previewTitle: "Default", props: { steps, activeStep: 2 } },
        {
            previewTitle: "Column",
            props: { steps, activeStep: 2, direction: "column" },
        },
    ],
}
