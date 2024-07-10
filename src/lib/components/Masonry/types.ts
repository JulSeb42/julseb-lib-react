/*=============================================== Masonry types ===============================================*/

import type { ReactNode } from "react"
import type { LibComponentBase, LibSpacers } from "../../types"

export interface MasonryProps extends LibComponentBase<HTMLDivElement> {
    children?: Array<ReactNode>
    col?: number
    gap?: LibSpacers
}
