/*=============================================== ButtonIcon styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { BREAKPOINTS, setDefaultTheme } from "../../"
import { ButtonMixin } from "../ComponentsMixins"
import type { ILibButtonIconStyles } from "./subtypes"

const StyledButtonIcon = styled.button<ILibButtonIconStyles>`
    ${ButtonMixin}
    position: relative;
    padding: 0;
    z-index: 0;
    width: ${({ $size }) => stringifyPx($size)};
    height: ${({ $size }) => stringifyPx($size)};

    ${({ $variant, $showBackgroundHover, theme }) =>
        $variant === "transparent" &&
        $showBackgroundHover &&
        css`
            @media ${BREAKPOINTS.HOVER} {
                &:not(:disabled):hover {
                    background-color: ${theme.GRAY_50};
                }
            }
        `}
`

setDefaultTheme([StyledButtonIcon])

export { StyledButtonIcon }
