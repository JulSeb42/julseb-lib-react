/*=============================================== Breadcrumbs styles ===============================================*/

import styled from "styled-components"
import {
    MEDIA,
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
    color: ${({ theme, $activeColor }) =>
        Mixins.AllColors($activeColor, theme)};
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
            Mixins.ColorsHoverDefault($linkColor, theme)};
        transition: ${TRANSITIONS.SHORT};
        font-weight: ${FONT_WEIGHTS.BLACK};

        @media ${MEDIA.HOVER} {
            &:hover {
                color: ${({ theme, $linkColor }) =>
                    Mixins.ColorsHoverHover($linkColor, theme)};
            }

            &:active {
                color: ${({ theme, $linkColor }) =>
                    Mixins.ColorsHoverActive($linkColor, theme)};
            }
        }
    }
`

const SeparatorContainer = styled.span<{ $color: LibAllColors }>`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    line-height: ${LINE_HEIGHTS.BODY};
    color: ${({ $color, theme }) => Mixins.AllColors($color, theme)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
`

setDefaultTheme([StyledBreadcrumbs, SeparatorContainer])

export { StyledBreadcrumbs, SeparatorContainer }
