/*=============================================== Set default theme ===============================================*/

import type { FC } from "react"

import { ThemeLight } from "../Mixins"

export function setDefaultTheme(arr: FC[]) {
    return arr.forEach(
        component => (component.defaultProps = { theme: ThemeLight }),
    )
}
