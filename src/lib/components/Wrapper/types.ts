/*=============================================== Wrapper types ===============================================*/

import type { LibComponentBase, LibSpacers } from "../../types"

export interface ILibWrapper extends LibComponentBase<HTMLDivElement> {
    gap?: LibSpacers
}
