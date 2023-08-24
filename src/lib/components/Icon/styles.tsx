/*=============================================== Icon styles ===============================================*/

import styled from "styled-components"
import SVG from "react-inlinesvg"

import { setDefaultTheme, stringifyPx } from "../../"
import type { LibAllColors } from "../../types"
import type {} from "./types"

const StyledIcon = styled(SVG)<{ $size: number; $color?: LibAllColors }>`
    width: ${({ $size }) => stringifyPx($size)};
    height: ${({ $size }) => stringifyPx($size)};
    fill: ${({ theme, $color }) => theme.AllColors($color)};

    path {
        fill: ${({ theme, $color }) => theme.AllColors($color)};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
