/*=============================================== Highlight types ===============================================*/

import type { CSSProperties } from "react"
import type { ReactChildren } from "../../types"
import type { ILibText } from "../Text/types"

export type ILibHighlight = ILibText & {
    children?: ReactChildren
    highlightedText: string
    highlightStyle?: CSSProperties
}
