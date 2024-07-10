/*=============================================== Set default theme ===============================================*/

import type { FC } from "react"
import { THEME_LIGHT } from "../Mixins"

export function setDefaultTheme(arr: Array<FC>) {
    return arr.forEach(
        component => (component.defaultProps = { theme: THEME_LIGHT })
    )
}
