/*=============================================== ButtonGroup styles ===============================================*/

import styled, { css } from "styled-components"
import { Mixins, setDefaultTheme } from "../../"
import type {
    LibButtonSize,
    LibButtonVariant,
    LibColorsHover,
    LibRadiusProps,
} from "../../types"

const StyledButtonGroup = styled.div<{
    $size?: LibButtonSize
    $borderRadius?: LibRadiusProps
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

setDefaultTheme([StyledButtonGroup, Separator])

export { StyledButtonGroup, Separator }
