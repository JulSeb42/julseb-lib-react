/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Mixins, RADIUSES } from "../../"
import type { LibAllColors, ILibMargin } from "../../types"

const StyledHr = styled.hr<{
    $color: LibAllColors
    $height: number
    $maxWidth: string | number
    $margin?: ILibMargin
}>`
    display: block;
    width: 100%;
    max-width: ${({ $maxWidth }) => stringifyPx($maxWidth)};
    border: none;
    background-color: ${({ theme, $color }) => Mixins.AllColors($color, theme)};
    height: ${({ $height }) => stringifyPx($height)};
    ${({ $margin }) => Mixins.Margin($margin)}

    &.Rounded {
        border-radius: ${RADIUSES.ROUND};
    }
`

setDefaultTheme([StyledHr])

export { StyledHr }
