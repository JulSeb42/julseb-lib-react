/*=============================================== Button styles ===============================================*/

import styled from "styled-components"
import {
    FONT_FAMILIES,
    FONT_SIZES,
    FONT_WEIGHTS,
    Mixins,
    SPACERS,
    setDefaultTheme,
} from "../../"
import { ButtonMixin, type ILibButtonMixin } from "../ComponentsMixins"
import type { LibSpacers, LibButtonSize } from "../../types"

interface ILibButtonStyle extends ILibButtonMixin {
    $size?: LibButtonSize
    $gap?: LibSpacers
    $noPadding?: boolean
}

const StyledButton = styled.button<ILibButtonStyle>`
    min-width: 48px;
    font-family: ${FONT_FAMILIES.BODY};
    font-weight: ${FONT_WEIGHTS.BLACK};
    font-size: ${({ $size }) =>
        $size === "small" ? FONT_SIZES.SMALL : FONT_SIZES.BODY};
    padding: ${({ $size, $noPadding }) =>
        $noPadding
            ? 0
            : $size === "small"
            ? `${SPACERS.XXS} ${SPACERS.XS}`
            : `${SPACERS.XS} ${SPACERS.S}`};
    gap: ${({ $gap }) => Mixins.Spacer($gap)};
    ${ButtonMixin}
`

setDefaultTheme([StyledButton])

export { StyledButton }
