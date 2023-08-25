/*=============================================== Section types ===============================================*/

import type { LibComponentBase, LibSpacers } from "../../types"

export interface SectionProps extends LibComponentBase<HTMLDivElement> {
    gap?: LibSpacers
}
