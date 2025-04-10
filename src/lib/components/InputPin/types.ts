import type {
    CssJustifyContent,
    LibSpacers,
    DispatchState,
    LibValueInputPin,
    LibComponentBase,
    LibFontSizes,
} from "../../types"
import type { ILibInputBase } from "../InputComponents/types"

export type ILibInputPin = LibComponentBase<HTMLDivElement> &
    Omit<ILibInputBase, "inputVariant"> & {
        values: LibValueInputPin
        setValues: DispatchState<LibValueInputPin>
        placeholders?: Array<string>
        container?: {
            justifyContent?: CssJustifyContent
            columnGap?: LibSpacers
        }
        inputSize?: number
        inputFontSize?: LibFontSizes
        hideValues?: boolean
        disabled?: boolean
        maxLength?: never
        type?: never
        placeholder?: never
        value?: never
        onChange?: never
    }
