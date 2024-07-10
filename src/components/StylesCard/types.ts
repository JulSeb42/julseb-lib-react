/*=============================================== StylesCard types ===============================================*/

import type { Variable } from "../../data/types"

const types = { shadow: "shadow", spacer: "spacer", radius: "radius" } as const

export type CardType = keyof typeof types

export interface StylesCardProps {
    variable: Variable
    type: CardType
}
