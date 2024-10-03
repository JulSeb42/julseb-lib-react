/*=============================================== StylesCard types ===============================================*/

import type { Variable } from "../../data/types"

export interface StylesCardProps {
    variable: Variable
    type: "shadow" | "spacer" | "radius"
}
