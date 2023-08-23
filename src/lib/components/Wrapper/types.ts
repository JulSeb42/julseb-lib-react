/*=============================================== Wrapper types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
}
