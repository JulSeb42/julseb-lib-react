/*=============================================== Lib icons styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme } from "../"
import type { LibAllColors } from "../types"

const StyledIcon = styled.svg<{ $size?: number; $color?: LibAllColors }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${({ theme, $color }) => theme.AllColors($color)};

    path {
        fill: ${({ theme, $color }) => theme.AllColors($color)};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
