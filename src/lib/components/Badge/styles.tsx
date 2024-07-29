/*=============================================== Badge styles ===============================================*/

import styled, { css } from "styled-components"
import { FONT_WEIGHTS, Mixins, setDefaultTheme } from "../../"
import type { LibAllColors, ILibPadding, ILibRadius } from "../../types"

const StyledBadge = styled.span<{
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
    $borderRadius?: ILibRadius
    $padding?: ILibPadding
    $hasChildren?: boolean
    $childrenLength?: number
}>`
    min-width: var(--badge-size);
    height: var(--badge-size);
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ $contentColor, theme }) =>
        Mixins.AllColors($contentColor, theme)};
    font-size: var(--badge-font-size);
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
