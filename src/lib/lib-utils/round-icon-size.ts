/*=============================================== Round icon size ===============================================*/

import { ICON_MULTIPLIER } from "../Variables"

export const roundIconSize = (size: number) => {
    return Number((size * ICON_MULTIPLIER).toFixed(2))
}
