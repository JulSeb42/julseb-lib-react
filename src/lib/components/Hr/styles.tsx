/*=============================================== Hr styles ===============================================*/

import styled from "styled-components"

import { setDefaultTheme, Mixins, stringifyPx, RADIUSES } from "../../"
import type { LibAllColors, LibMarginProps } from "../../types"
import type {} from "./types"

const StyledHr = styled.hr<{
    $color?: LibAllColors
    $height: number
    $maxWidth: string | number
    $margin?: LibMarginProps
    $isRounded?: boolean
}>`
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
