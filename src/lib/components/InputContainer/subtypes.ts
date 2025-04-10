import type { ILibInputContainer } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN THOSE COMPONENTS

export type ILibHelperBottom = Pick<
    ILibInputContainer,
    "helperBottom" | "data-testid" | "className" | "iconBaseUrl"
>
