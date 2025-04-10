import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    LibStep,
    ReactChildren,
    LibStepperDirection,
    LibButtonLinkBlank,
} from "../../types"

interface ILibStepperBase extends LibComponentBase<HTMLDivElement> {
    direction?: LibStepperDirection
    activeStep?: number
    iconActive?: LibIcon
    iconActiveSize?: number
    iconBaseUrl?: string
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

export type ILibStep = LibComponentBase<HTMLSpanElement> &
    LibButtonLinkBlank & {
        direction?: LibStepperDirection
        accentColor?: LibColorsHover
        isActive?: boolean
        isDone?: boolean
        iconActive?: LibIcon
        iconActiveSize?: number
        number?: number
        iconBaseUrl?: string
    }
