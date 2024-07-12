/*=============================================== Badge styles ===============================================*/

import styled, { css } from "styled-components"
import { FONT_WEIGHTS, Mixins, setDefaultTheme } from "../../"
import { roundIconSize } from "../../lib-utils"
import type { LibAllColors, LibPaddingProps, LibRadiusProps } from "../../types"

const StyledBadge = styled.span<{
    $size: number
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
    $borderRadius?: LibRadiusProps
    $padding?: LibPaddingProps
    $hasChildren?: boolean
    $childrenLength?: number
}>`
    min-width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ $contentColor, theme }) =>
        Mixins.AllColors($contentColor, theme)};
    font-size: ${({ $size }) => roundIconSize($size)}px;
    font-weight: ${FONT_WEIGHTS.BLACK};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};

    ${({ $hasChildren, $childrenLength, $padding }) =>
        $hasChildren &&
        $childrenLength &&
        $childrenLength > 2 &&
        css`
            ${Mixins.Padding($padding)}
        `}
`

setDefaultTheme([StyledBadge])

export { StyledBadge }
