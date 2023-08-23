/*=============================================== Aside types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

const asideSizes = { default: "default", small: "small" } as const

export type AsideSize = keyof typeof asideSizes | number

export interface AsideProps extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
    size?: AsideSize
    minHeight?: string | number
}
