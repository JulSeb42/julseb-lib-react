/*=============================================== Section types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { LibSpacers } from "../../types"

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
    gap?: LibSpacers
}
