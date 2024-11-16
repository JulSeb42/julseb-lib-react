/*=============================================== FullBleed types ===============================================*/

import type { LibComponentBase, ILibPadding } from "../../types"

export interface ILibFullBleed extends LibComponentBase<HTMLDivElement> {
    height?: number | string
    aspectRatio?: string
    padding?: ILibPadding
}
