/*=============================================== Image styles ===============================================*/

import type { FC } from "react"
import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Text, Mixins, SPACERS, FONT_WEIGHTS } from "../../"
import type {
    LibAllColors,
    ILibRadius,
    CssObjectFit,
    LibImageBackgroundOverlay,
    LibFontSizes,
} from "../../types"

const StyledImage = styled.img<{
    $width: string | number
    $height: string | number
    $borderRadius?: ILibRadius
    $fit?: CssObjectFit
    $aspectRatio?: string
    $fallbackBackground: LibAllColors
    $fallbackTextColor: LibAllColors
    $fallbackFontSize?: LibFontSizes
}>`
    display: block;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    object-fit: ${({ $fit }) => $fit};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    position: relative;
    z-index: 0;
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)}

    &[alt]:after {
        position: absolute;
        top: 0;
        left: 0;
        ${Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "center",
        })};
        width: 100%;
        height: 100%;
        background-color: ${({ $fallbackBackground, theme }) =>
            Mixins.AllColors($fallbackBackground, theme)};
        color: ${({ $fallbackTextColor, theme }) =>
            Mixins.AllColors($fallbackTextColor, theme)};
        content: attr(data-fallback);
        font-weight: ${FONT_WEIGHTS.BOLD};
        font-size: ${({ $fallbackFontSize }) =>
            Mixins.FontSize($fallbackFontSize)};
    }
`

const ImgContainer = styled.figure<{
    $width: string | number
    $height: string | number
    $borderRadius?: ILibRadius
}>`
    position: relative;
    overflow: hidden;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
`

const Caption = styled(Text).attrs({ as: "figcaption" })<{
    $backgroundColor: LibImageBackgroundOverlay
    $textColor: LibAllColors
}>`
    background: ${({ theme, $backgroundColor }) =>
        Mixins.ColorsAndOverlays($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};
    padding: ${SPACERS.S};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
` as FC<any>

setDefaultTheme([StyledImage, ImgContainer, Caption])

export { ImgContainer, Caption }

// eslint-disable-next-line
export default StyledImage
