/*=============================================== Fallback ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, Mixins } from "../../"
import type { ILibRadius } from "../../types"

/**
 * @description Returns a Fallback component. Use it for lazy loading in Image or Video components
 * @extends HTMLDivElement
 * @prop as?: ElementType
 * @prop $width: string | number
 * @prop $height: string | number
 * @prop $borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop $aspectRatio?: string
 */

const Fallback = styled.div<{
    $width: string | number
    $height: string | number
    $borderRadius?: ILibRadius
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
