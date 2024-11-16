/*=============================================== Video styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme } from "../../"
import type { CssObjectFit } from "../../types"

const StyledVideo = styled.video<{
    $width: string | number
    $height: string | number
    $fit?: CssObjectFit
    $aspectRatio?: string
}>`
    display: block;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    object-fit: ${({ $fit }) => $fit};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
`

setDefaultTheme([StyledVideo])

// eslint-disable-next-line
export default StyledVideo
