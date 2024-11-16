/*=============================================== Set default theme ===============================================*/

import type { FC } from "react"
import { COLORS_LIGHT } from "../Variables"

/**
 * @description Sets ThemeLight as default for projects not using ThemeProvider
 * @param arr: Array<FC>
 */
export const setDefaultTheme = (arr: Array<FC>) => {
    return arr.forEach(
        component => (component.prototype = { theme: COLORS_LIGHT })
    )
}
