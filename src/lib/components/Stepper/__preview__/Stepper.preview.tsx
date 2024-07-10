/*=============================================== StepperPreview ===============================================*/

import { Stepper } from "../../../"
import {  } from "../../../types"
import type { StepperProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const stepperPreview: ComponentPreview<StepperProps, typeof Stepper> = {
    name: "Stepper",
    component: Stepper,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
