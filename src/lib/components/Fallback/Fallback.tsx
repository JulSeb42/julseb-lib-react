/*=============================================== Fallback ===============================================*/

import styled from "styled-components"

import { setDefaultTheme, stringifyPx, Mixins } from "../../"
import type { LibRadiusProps } from "../../types"

const Fallback = styled.div<{
    $width: string | number
    $height: string | number
    $borderRadius?: LibRadiusProps
    $aspectRatio?: string
}>`
    position: relative;
    z-index: 0;
    background-color: ${({ theme }) => theme.GRAY_500};
    display: block;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)}
`

setDefaultTheme([Fallback])

export { Fallback }
