/*=============================================== Highlight types ===============================================*/

import type { CSSProperties } from "react"
import type { ILibText } from "../Text/types"

export type ILibHighlight = ILibText & {
    children?: string
    highlightedText: string
    highlightStyle?: CSSProperties
}
