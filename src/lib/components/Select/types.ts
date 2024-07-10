/*=============================================== Select types ===============================================*/

import type {
    LibComponentBase,
    LibIcon,
    LibListDirection,
    DispatchState,
} from "../../types"
import type {
    InputBaseProps,
    InputValidationIcon,
} from "../InputComponents/types"

export interface SelectProps
    extends LibComponentBase<HTMLDivElement>,
        InputBaseProps,
        InputValidationIcon {
    selected: string
    setSelected: DispatchState<string>
    options?: Array<string>
    disabled?: boolean
    listDirection?: LibListDirection
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
