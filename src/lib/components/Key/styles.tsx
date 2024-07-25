/*=============================================== Key styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, RADIUSES, FONT_SIZES, SPACERS, Mixins } from "../../"
import type { LibKeySize, LibColorsShort } from "../../types"

const StyledKey = styled.span<{
    $size?: LibKeySize
    $accentColor: Exclude<LibColorsShort, "black" | "white">
}>`
    border: 1px solid
        ${({ theme, $accentColor }) => Mixins.AllColors($accentColor, theme)};
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
        Mixins.Colors50($accentColor, theme)};
    color: ${({ theme }) => theme.FONT};
`

setDefaultTheme([StyledKey])

export { StyledKey }
