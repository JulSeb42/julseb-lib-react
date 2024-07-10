/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, Mixins, RADIUSES } from "../../"
import type { LibAllColors, LibMarginProps } from "../../types"

const StyledHr = styled.hr<{
    $color?: LibAllColors
    $height: number
    $maxWidth: string | number
    $margin?: LibMarginProps
    $isRounded?: boolean
}>`
    display: block;
    width: 100%;
    max-width: ${({ $maxWidth }) => stringifyPx($maxWidth)};
    border: none;
    background-color: ${({ theme, $color }) => theme.AllColors($color)};
    height: ${({ $height }) => stringifyPx($height)};
    border-radius: ${({ $isRounded }) => $isRounded && RADIUSES.ROUND};
    ${({ $margin }) => Mixins.Margin($margin)}
`

setDefaultTheme([StyledHr])

export { StyledHr }
