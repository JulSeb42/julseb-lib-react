/*=============================================== InputContainer types ===============================================*/

import type { CSSProperties } from "react"
import type {
    CssFontStyle,
    LibAllColors,
    LibComponentBase,
    LibIcon,
    ReactChildren,
} from "../../types"
import type { LibInputWithValidation } from "../InputComponents/types"

export interface ILibInputContainer
    extends LibComponentBase<HTMLDivElement>,
        LibInputWithValidation {
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
    style?: CSSProperties
    iconBaseUrl?: string
}
