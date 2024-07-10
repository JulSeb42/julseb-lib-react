/*=============================================== Wrapper types ===============================================*/

import type { LibComponentBase, LibSpacers } from "../../types"

export interface WrapperProps extends LibComponentBase<HTMLDivElement> {
    gap?: LibSpacers
}
