/*=============================================== Grid types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {  } from "../../types"

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
}
