/*=============================================== Set default theme ===============================================*/

import type { FC } from "react"
import { THEME_LIGHT } from "../Mixins"

/**
 * @description Sets ThemeLight as default for projects not using ThemeProvider
 * @param arr: Array<FC>
 */
export function setDefaultTheme(arr: Array<FC>) {
    return arr.forEach(
        component => (component.defaultProps = { theme: THEME_LIGHT })
    )
}
