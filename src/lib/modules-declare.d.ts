import type { FunctionComponent, SVGAttributes } from "react"
import "styled-components"
import type { COLORS_LIGHT, COLORS_DARK } from "./Variables"

declare module "*.svg" {
    const content: FunctionComponent<SVGAttributes<SVGElement>>
    // @ts-ignore
    // eslint-disable-next-line
    export default content
}

declare module "./utils/type-values"

declare module "styled-components" {
    type ThemeLight = typeof COLORS_LIGHT
    type ThemeDark = typeof COLORS_DARK

    export interface DefaultTheme extends ThemeLight, ThemeDark {}
}
