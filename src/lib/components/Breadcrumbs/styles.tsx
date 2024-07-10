/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"
import {
    BREAKPOINTS,
    FONT_SIZES,
    FONT_WEIGHTS,
    LINE_HEIGHTS,
    Mixins,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type { LibAllColors, LibColorsHover, LibSpacers } from "../../types"

const StyledBreadcrumbs = styled.nav<{
    $linkColor: LibColorsHover
    $activeColor: LibAllColors
    $gap: LibSpacers
}>`
    color: ${({ theme, $activeColor }) => theme.AllColors($activeColor)};
    font-size: ${FONT_SIZES.BODY};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: ${LINE_HEIGHTS.BODY};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexWrap: "wrap",
            $gap,
        })}

    & > a {
        text-decoration: none;
        color: ${({ theme, $linkColor }) =>
            theme.ColorsHoverDefault($linkColor)};
        transition: ${TRANSITIONS.SHORT};
        font-weight: ${FONT_WEIGHTS.BLACK};

        @media ${BREAKPOINTS.HOVER} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverHover($linkColor)};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    theme.ColorsHoverActive($linkColor)};
            }
        }
    }
`

const SeparatorContainer = styled.span<{ $color: LibAllColors }>`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    line-height: ${LINE_HEIGHTS.BODY};
    color: ${({ $color, theme }) => theme.AllColors($color)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
`

setDefaultTheme([StyledBreadcrumbs, SeparatorContainer])

export { StyledBreadcrumbs, SeparatorContainer }
