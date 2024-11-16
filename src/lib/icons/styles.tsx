/*=============================================== Lib icons styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, Mixins } from "../"
import type { LibAllColors } from "../types"

const StyledIcon = styled.svg<{ $size?: number; $color: LibAllColors }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${({ theme, $color }) => Mixins.AllColors($color, theme)};

    path {
        fill: ${({ theme, $color }) => Mixins.AllColors($color, theme)};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
