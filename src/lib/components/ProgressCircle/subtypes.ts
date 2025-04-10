import type { ILibProgressCircle } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN PROGRESS_CIRCLE COMPONENTS

export interface ILibProgressCircleValue
    extends Pick<
        ILibProgressCircle,
        "data-testid" | "className" | "showValue" | "value"
    > {}
