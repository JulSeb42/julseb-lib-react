/*=============================================== Stepper types ===============================================*/

import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    LibStep,
    ReactChildren,
} from "../../types"

const directions = { column: "column", row: "row" } as const
export type StepperDirection = keyof typeof directions

interface StepperPropsBase extends LibComponentBase<HTMLDivElement> {
    direction?: StepperDirection
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
