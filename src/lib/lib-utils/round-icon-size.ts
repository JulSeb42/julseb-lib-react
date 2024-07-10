/*=============================================== Round icon size ===============================================*/

import { ICON_MULTIPLIER } from "../Variables"

export function roundIconSize(size: number) {
    return Number((size * ICON_MULTIPLIER).toFixed(2))
}
