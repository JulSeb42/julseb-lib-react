/*=============================================== Stepper types ===============================================*/

import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    LibStep,
    ReactChildren,
    LibStepperDirection,
} from "../../types"

interface ILibStepperBase extends LibComponentBase<HTMLDivElement> {
    direction?: LibStepperDirection
    activeStep?: number
    iconActive?: LibIcon
    iconActiveSize?: number
    accentColor?: LibColorsHover
}

interface StepperWithSteps extends ILibStepperBase {
    steps: Array<LibStep>
    children?: never
}

interface StepperWithChildren extends ILibStepperBase {
    steps?: never
    children?: ReactChildren
}

export type ILibStepper = StepperWithSteps | StepperWithChildren
