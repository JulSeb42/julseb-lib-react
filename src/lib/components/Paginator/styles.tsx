/*=============================================== Paginator styles ===============================================*/

import type { FC } from "react"
import styled from "styled-components"
import { setDefaultTheme, Input, Mixins } from "../../"
import type { LibColorsHover } from "../../types"

const TextContainer = styled.span`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
    })}
`

const StyledInput = styled(Input)<{ $accentColor: LibColorsHover }>`
    width: 48px;
    -moz-appearance: textfield;
    appearance: textfield;

    &:focus {
        border-color: ${({ theme, $accentColor }) =>
            Mixins.ColorsHoverDefault($accentColor, theme)};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
` as FC<any>

setDefaultTheme([TextContainer, StyledInput])

export { TextContainer, StyledInput }
