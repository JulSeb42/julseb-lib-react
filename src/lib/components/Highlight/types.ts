/*=============================================== Highlight types ===============================================*/

import type { ILibText } from "../Text/types"

export type ILibHighlight = ILibText & {
    children?: string
    highlightedText: string
}
