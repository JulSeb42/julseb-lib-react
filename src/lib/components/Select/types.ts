/*=============================================== Select types ===============================================*/

import type {
    LibComponentBase,
    LibIcon,
    LibInputListDirection,
    DispatchState,
} from "../../types"
import type {
    ILibInputBase,
    ILibInputValidationIconComponent,
} from "../InputComponents/types"

export interface ILibSelect
    extends LibComponentBase<HTMLDivElement>,
        ILibInputBase,
        ILibInputValidationIconComponent {
    selected: string
    setSelected: DispatchState<string>
    options?: Array<string>
    disabled?: boolean
    listDirection?: LibInputListDirection
    tabIndex?: number
    icons?: {
        iconLeft?: LibIcon
        caret?: LibIcon
    }
    iconSizes?: {
        iconLeft?: number
        caret?: number
    }
}
