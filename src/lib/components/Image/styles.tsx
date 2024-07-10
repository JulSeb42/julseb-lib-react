/*=============================================== Image styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, Text, Mixins, SPACERS } from "../../"
import type { LibAllColors, LibRadiusProps, ObjectFit } from "../../types"
import type { ImageBackgroundOverlay } from "./types"

const StyledImage = styled.img<{
    $width: string | number
    $height: string | number
    $borderRadius?: LibRadiusProps
    $fit?: ObjectFit
    $aspectRatio?: string
}>`
    display: block;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    object-fit: ${({ $fit }) => $fit};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    position: relative;
    z-index: 0;
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)}
`

const ImgContainer = styled.figure<{
    $width: string | number
    $height: string | number
    $borderRadius?: LibRadiusProps
}>`
    position: relative;
    overflow: hidden;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
`

const Caption = styled(Text).attrs({ as: "figcaption" })<{
    $backgroundColor?: ImageBackgroundOverlay
    $textColor?: LibAllColors
}>`
    background: ${({ theme, $backgroundColor }) =>
        theme.ColorsAndOverlays($backgroundColor)};
    color: ${({ theme, $textColor }) => theme.AllColors($textColor)};
    padding: ${SPACERS.S};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`

setDefaultTheme([StyledImage, ImgContainer, Caption])

export { ImgContainer, Caption }

// eslint-disable-next-line
export default StyledImage
