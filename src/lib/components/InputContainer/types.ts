import type { CSSProperties } from "react"
import type {
    LibComponentBase,
    ReactChildren,
    LibHelperBottom,
} from "../../types"
import type { LibInputWithValidation } from "../InputComponents/types"

export interface ILibInputContainer
    extends LibComponentBase<HTMLDivElement>,
        LibInputWithValidation {
    label?: string
    labelComment?: string
    helper?: string
    helperBottom?: LibHelperBottom
    children?: ReactChildren
    value?: any
    counter?: boolean
    maxLength?: number
    hasListOpen?: boolean
    style?: CSSProperties
    iconBaseUrl?: string
}
