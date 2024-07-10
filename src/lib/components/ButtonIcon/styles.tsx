/*=============================================== ButtonIcon styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { BREAKPOINTS, setDefaultTheme } from "../../"
import { ButtonMixin, type ButtonMixinProps } from "../ComponentsMixins"
import type { LibButtonVariant } from "../../types"

interface ButtonIconProps extends ButtonMixinProps {
    $variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    $size: number
    $showBackgroundHover?: boolean
}

const StyledButtonIcon = styled.button<ButtonIconProps>`
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
