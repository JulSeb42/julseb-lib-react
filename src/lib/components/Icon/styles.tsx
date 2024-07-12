/*=============================================== Icon styles ===============================================*/

import styled from "styled-components"
import SVG from "react-inlinesvg"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, Mixins } from "../../"
import type { LibAllColors } from "../../types"

const StyledIcon = styled(SVG)<{ $size: number; $color: LibAllColors }>`
    width: ${({ $size }) => stringifyPx($size)};
    height: ${({ $size }) => stringifyPx($size)};
    fill: ${({ theme, $color }) => Mixins.AllColors($color, theme)};

    path {
        fill: ${({ theme, $color }) => Mixins.AllColors($color, theme)};
    }
`

setDefaultTheme([StyledIcon])

export { StyledIcon }
