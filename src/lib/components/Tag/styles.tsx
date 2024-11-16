/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"
import { Mixins, setDefaultTheme } from "../../"
import type {
    LibAllColors,
    ILibBorder,
    LibFontSizes,
    ILibPadding,
    ILibRadius,
    LibSpacers,
} from "../../types"

const StyledTag = styled.span<{
    $backgroundColor: LibAllColors
    $textColor: LibAllColors
    $border?: ILibBorder
    $padding?: ILibPadding
    $borderRadius?: ILibRadius
    $gap?: LibSpacers
    $fontSize?: LibFontSizes
}>`
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};
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
