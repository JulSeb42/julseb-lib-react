/*=============================================== ButtonGroup styles ===============================================*/

import styled, { css } from "styled-components"
import { FONT_WEIGHTS, Mixins, setDefaultTheme, SPACERS } from "../../"
import { ButtonMixin } from "../ComponentsMixins"
import type {
    LibButtonSize,
    LibButtonVariant,
    LibColorsHover,
    ILibRadius,
} from "../../types"

const StyledButtonGroup = styled.div<{
    $size?: LibButtonSize
    $borderRadius?: ILibRadius
    $variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    $color: LibColorsHover
}>`
    height: ${({ $size }) => ($size === "small" ? 24 : 34)}px;
    overflow: hidden;
    width: fit-content;
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
    ${Mixins.Flexbox({
        $inline: true,
        $justifyContent: "flex-start",
        $alignItems: "flex-start",
    })}

    ${({ $variant, theme, $color }) =>
        $variant === "transparent" &&
        css`
            border: 1px solid ${Mixins.ColorsHoverDefault($color, theme)};
        `}

    & > * {
        height: 100%;
    }
`

const Separator = styled.hr<{ $color: LibColorsHover }>`
    width: 1px;
    position: relative;
    top: 0;
    border: none;
    background-color: ${({ theme, $color }) =>
        Mixins.ColorsHoverDefault($color, theme)};
`

const StyledToggle = styled.label<{
    $size?: LibButtonSize
    $variant?: Extract<LibButtonVariant, "plain" | "transparent" | "ghost">
    $color: LibColorsHover
    $withIcon: boolean
}>`
    width: ${({ $withIcon, $size }) =>
        $withIcon && ($size === "small" ? 22 : 34)}px;
    height: ${({ $size }) => ($size === "small" ? 22 : 34)}px;
    ${ButtonMixin}
    padding: ${({ $withIcon }) => !$withIcon && `0 ${SPACERS.XS}`};
    font-weight: ${FONT_WEIGHTS.BLACK};

    &:has(input:checked) {
        background-color: ${({ $color, theme }) =>
            Mixins.AllColors(`${$color}-300` as any, theme)};
        color: ${({ theme }) => Mixins.AllColors("background", theme)};

        ${({ $variant, $color, theme }) =>
            $variant === "transparent" &&
            css`
                &:hover {
                    color: ${Mixins.ColorsHoverDefault($color, theme)};
                }
            `}
    }
`

const ToggleInput = styled.input`
    display: none;
`

const ToggleLabel = styled.span``

setDefaultTheme([
    StyledButtonGroup,
    Separator,
    StyledToggle,
    ToggleInput,
    ToggleLabel,
])

export { StyledButtonGroup, Separator, StyledToggle, ToggleInput, ToggleLabel }
