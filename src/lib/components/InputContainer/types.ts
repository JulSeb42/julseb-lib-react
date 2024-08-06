/*=============================================== InputContainer types ===============================================*/

import type {
    CssFontStyle,
    LibAllColors,
    LibComponentBase,
    LibIcon,
    ReactChildren,
} from "../../types"
import type { ILibInputValidationHelper } from "../InputComponents/types"

export interface ILibInputContainer
    extends LibComponentBase<HTMLDivElement>,
        Partial<Pick<ILibInputValidationHelper, "validation" | "iconBaseUrl">> {
    label?: string
    labelComment?: string
    helper?: string
    helperBottom?:
        | string
        | {
              text: string
              textColor?: LibAllColors
              fontStyle?: CssFontStyle
              icon?: LibIcon
              iconColor?: LibAllColors
              iconSize?: number
          }
    children?: ReactChildren
    value?: any
    counter?: boolean
    maxLength?: number
    hasListOpen?: boolean
}
