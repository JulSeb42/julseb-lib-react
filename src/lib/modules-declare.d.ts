import type { FunctionComponent, SVGAttributes } from "react"
import "styled-components"
import type { THEME_LIGHT, THEME_DARK } from "./Mixins"

declare module "*.svg" {
    const content: FunctionComponent<SVGAttributes<SVGElement>>
    // eslint-disable-next-line
    export default content
}

declare module "./utils/type-values"

declare module "styled-components" {
    type ThemeLight = typeof THEME_LIGHT
    type ThemeDark = typeof THEME_DARK
    type ThemeCommon = {
        CURRENT_COLOR: "currentColor"
        TRANSPARENT: "transparent"
    }

    export interface DefaultTheme extends ThemeLight, ThemeDark, ThemeCommon {}
}
