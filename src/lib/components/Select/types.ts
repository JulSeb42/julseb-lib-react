/*=============================================== Select types ===============================================*/

import type {
    LibComponentBase,
    LibIcon,
    LibInputListDirection,
    DispatchState,
    LibInputPrefixAndSuffix
} from "../../types"
import type {
    ILibInputBase,
    ILibInputValidationIconComponent,
} from "../InputComponents/types"

export interface ILibSelect
    extends Omit<LibComponentBase<HTMLDivElement>, "prefix">,
        ILibInputBase,
        ILibInputValidationIconComponent {
    selected: string
    setSelected: DispatchState<string>
    options?: Array<string>
    disabled?: boolean
    listDirection?: LibInputListDirection
    tabIndex?: number
    prefix?: LibInputPrefixAndSuffix
    icons?: {
        iconLeft?: LibIcon
        caret?: LibIcon
    }
    iconSizes?: {
        iconLeft?: number
        caret?: number
    }
}
