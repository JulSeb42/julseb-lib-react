/*=============================================== Stepper types ===============================================*/

import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    LibStep,
    ReactChildren,
    LibStepperDirection,
} from "../../types"

interface StepperPropsBase extends LibComponentBase<HTMLDivElement> {
    direction?: LibStepperDirection
    activeStep?: number
    iconActive?: LibIcon
    iconActiveSize?: number
    accentColor?: LibColorsHover
}

interface StepperWithSteps extends StepperPropsBase {
    steps: Array<LibStep>
    children?: never
}

interface StepperWithChildren extends StepperPropsBase {
    steps?: never
    children: ReactChildren
}

export type StepperProps = StepperWithSteps | StepperWithChildren
