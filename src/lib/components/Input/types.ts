import type {
    ILibColorInput,
    ILibDateInput,
    ILibFileInput,
    ILibPasswordInput,
    ILibSearchInput,
    ILibSelectInput,
    ILibTextareaInput,
    ILibTextInput,
    ILibTimeInput,
} from "./subtypes"

export type ILibInput =
    | ILibColorInput
    | ILibDateInput
    | ILibFileInput
    | ILibPasswordInput
    | ILibSearchInput
    | ILibSelectInput
    | ILibTextareaInput
    | ILibTextInput
    | ILibTimeInput
