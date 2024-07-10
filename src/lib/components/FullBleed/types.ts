/*=============================================== FullBleed types ===============================================*/

import type { LibComponentBase, LibPaddingProps } from "../../types"

export interface FullBleedProps extends LibComponentBase<HTMLDivElement> {
    height?: number | string
    aspectRatio?: string
    padding?: LibPaddingProps
}
