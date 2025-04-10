import styled from "styled-components"
import {
    FONT_FAMILIES,
    FONT_SIZES,
    FONT_WEIGHTS,
    Mixins,
    SPACERS,
    setDefaultTheme,
} from "../../"
import { ButtonMixin } from "../ComponentsMixins"
import type { ILibButtonStyle } from "./subtypes"

const StyledButton = styled.button<ILibButtonStyle>`
    min-width: 48px;
    font-family: ${FONT_FAMILIES.BODY};
    font-weight: ${FONT_WEIGHTS.BLACK};
    font-size: ${({ $size }) =>
        $size === "small" ? FONT_SIZES.SMALL : FONT_SIZES.BODY};
    padding: ${({ $size, $noPadding }) => {
        if ($noPadding) return "0"
        if ($size == "small") return `${SPACERS.XXS} ${SPACERS.XS}`
        return `${SPACERS.XS} ${SPACERS.S}`
    }};
    gap: ${({ $gap }) => Mixins.Spacer($gap)};
    ${ButtonMixin}
`

setDefaultTheme([StyledButton])

export { StyledButton }
