/*=============================================== Card styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, Flexbox, Mixins } from "../../"
import type {
    BackgroundImageProps,
    Cursor,
    LibAllColors,
    LibBorderProps,
    LibBoxShadowProps,
    LibPaddingProps,
    LibRadiusProps,
    TextAlign,
} from "../../types"

const StyledCard = styled(Flexbox)<{
    $border?: LibBorderProps
    $borderRadius?: LibRadiusProps
    $padding?: LibPaddingProps
    $cursor?: Cursor
    $width?: string | number
    $height?: string | number
    $shadow?: LibBoxShadowProps
    $backgroundColor: LibAllColors
    $textColor: LibAllColors
    $backgroundImg?: BackgroundImageProps
    $textAlign?: TextAlign
}>`
    text-decoration: none;
    overflow: hidden;
    position: relative;
    cursor: ${({ $cursor }) => $cursor};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};
    text-align: ${({ $textAlign }) => $textAlign};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
    ${({ $border }) => Mixins.Border($border)};
    ${({ $padding }) => Mixins.Padding($padding)};
    ${({ $shadow }) => Mixins.BoxShadow($shadow)};
    ${({ $backgroundImg }) => Mixins.BackgroundImage($backgroundImg)};
`

setDefaultTheme([StyledCard])

export { StyledCard }
