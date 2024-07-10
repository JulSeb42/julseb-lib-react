/*=============================================== Aside types ===============================================*/

import type { LibComponentBase, LibAsideSize } from "../../types"

export interface AsideProps extends LibComponentBase<HTMLDivElement> {
    size?: LibAsideSize
    minHeight?: string | number
}
