/*=============================================== Highlight types ===============================================*/

import type { TextProps } from "../Text/types"

export type HighlightProps = TextProps & {
    children?: string
    highlightedText: string
}
