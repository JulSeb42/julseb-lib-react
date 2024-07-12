/*=============================================== Alert styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { Mixins, setDefaultTheme } from "../../"
import type {
    LibAllColors,
    LibBorderProps,
    LibPaddingProps,
    LibRadiusProps,
    LibSpacers,
} from "../../types"

const StyledAlert = styled.div<{
    $maxWidth?: number
    $textColor: LibAllColors
    $padding?: LibPaddingProps
    $borderRadius?: LibRadiusProps
    $gap?: LibSpacers
    $backgroundColor: LibAllColors
    $border?: LibBorderProps
}>`
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};
    color: ${({ $textColor, theme }) => Mixins.AllColors($textColor, theme)};
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    ${({ $padding }) => Mixins.Padding($padding)};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
    ${({ $border }) => Mixins.Border($border)};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })}
`

setDefaultTheme([StyledAlert])

export { StyledAlert }
