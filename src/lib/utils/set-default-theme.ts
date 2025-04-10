import type { FC } from "react"
import { COLORS_LIGHT } from "../Variables"

/**
 * @description Sets ThemeLight as default for projects not using ThemeProvider
 * @param arr: Array<FC>
 */
export const setDefaultTheme = (arr: Array<FC>) => {
    return arr.forEach(
        component => (component.defaultProps = { theme: COLORS_LIGHT })
    )
}
