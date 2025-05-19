import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Mixins } from "../../"
import type { ILibRadius } from "../../types"

/**
 * Fallback styled component for displaying a placeholder during lazy loading in Image or Video components.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Fallback props.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string|number} props.$width - Width of the fallback.
 * @param {string|number} props.$height - Height of the fallback.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.$borderRadius] - Border radius for the fallback.
 * @param {string} [props.$aspectRatio] - Aspect ratio for the fallback.
 *
 * @example
 * <Fallback $width={200} $height={120} $borderRadius="m" $aspectRatio="16/9" />
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
