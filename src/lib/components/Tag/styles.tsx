/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"
import { Mixins, setDefaultTheme } from "../../"
import type {
    LibAllColors,
    LibBorderProps,
    LibFontSizes,
    LibPaddingProps,
    LibRadiusProps,
    LibSpacers,
} from "../../types"

const StyledTag = styled.span<{
    $backgroundColor?: LibAllColors
    $textColor?: LibAllColors
    $border?: LibBorderProps
    $padding?: LibPaddingProps
    $borderRadius?: LibRadiusProps
    $gap?: LibSpacers
    $fontSize?: LibFontSizes
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        theme.AllColors($backgroundColor)};
    color: ${({ theme, $textColor }) => theme.AllColors($textColor)};
    font-size: ${({ $fontSize }) => Mixins.FontSize($fontSize)};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $inline: true,
            $alignItems: "center",
            $justifyContent: "center",
            $gap,
        })}
    ${({ $border }) => Mixins.Border($border)};
    ${({ $padding }) => Mixins.Padding($padding)};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
`

setDefaultTheme([StyledTag])

export { StyledTag }
