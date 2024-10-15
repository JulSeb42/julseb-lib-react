/*=============================================== StylesCard types ===============================================*/

import type { Variable } from "../../data/types"

// eslint-disable-next-line
const cardTypes = {
    shadow: "shadow",
    spacer: "spacer",
    radius: "radius",
} as const
export type CardType = keyof typeof cardTypes

export interface StylesCardProps {
    variable: Variable
    type: CardType
}
