/*=============================================== Key styles ===============================================*/

import styled from "styled-components"

import { setDefaultTheme, RADIUSES, FONT_SIZES, SPACERS } from "../../"
import type { LibColorsHover } from "../../types"
import type { KeySize } from "./types"

const StyledKey = styled.span<{
    $size?: KeySize
    $accentColor?: LibColorsHover
}>`
    border: 1px solid
        ${({ theme, $accentColor }) => theme.AllColors($accentColor)};
    border-bottom-width: ${({ $size }) => ($size === "small" ? 2 : 3)}px;
    border-radius: ${({ $size }) =>
        $size === "small" ? RADIUSES.XS : RADIUSES.S};
    font-size: ${({ $size }) =>
        $size === "small" ? FONT_SIZES.SMALL : FONT_SIZES.BODY};
    padding: ${({ $size }) =>
        $size === "small"
            ? `0 ${SPACERS.XXS}`
            : `${SPACERS.XXS} ${SPACERS.XS}`};
    background-color: ${({ theme, $accentColor }) =>
        theme.Colors50($accentColor)};
`

setDefaultTheme([StyledKey])

export { StyledKey }
