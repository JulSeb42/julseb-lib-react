/*=============================================== Aside types ===============================================*/

import type { LibComponentBase } from "../../types"

const asideSizes = { default: "default", small: "small" } as const
export type AsideSize = keyof typeof asideSizes | number

export interface AsideProps extends LibComponentBase<HTMLDivElement> {
    size?: AsideSize
    minHeight?: string | number
}
