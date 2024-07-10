/*=============================================== Youtube styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme } from "../../"

const StyledYoutube = styled.iframe<{
    $width: string | number
    $height: string | number
    $aspectRatio?: string
}>`
    display: block;
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
`

setDefaultTheme([StyledYoutube])

export { StyledYoutube }
