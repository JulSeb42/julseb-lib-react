/*=============================================== Select types ===============================================*/

import type {
    LibComponentBase,
    LibIcon,
    LibInputListDirection,
    DispatchState,
    LibInputPrefixAndSuffix,
} from "../../types"
import type {
    ILibInputBase,
    LibInputWithValidation,
} from "../InputComponents/types"

export interface ILibSelect
    extends Omit<LibComponentBase<HTMLDivElement>, "prefix">,
        ILibInputBase,
        LibInputWithValidation {
    selected: string
    setSelected: DispatchState<string>
    options?: Array<string>
    disabled?: boolean
    listDirection?: LibInputListDirection
    tabIndex?: number
    prefix?: LibInputPrefixAndSuffix
    icons?: {
        left?: LibIcon
        caret?: LibIcon
    }
    iconSizes?: {
        left?: number
        caret?: number
    }
}
