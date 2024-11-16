/*=============================================== BackToTop styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, ButtonIcon, TRANSITIONS, Mixins } from "../../"
import type { LibSpacers } from "../../types"

const StyledBackToTop = styled(ButtonIcon)<{
    $left?: LibSpacers | "unset"
    $top?: LibSpacers | "unset"
    $right?: LibSpacers | "unset"
    $bottom?: LibSpacers | "unset"
    $zIndex?: number
}>`
    position: fixed;
    opacity: 0;
    visibility: hidden;
    transition: ${TRANSITIONS.SHORT};
    ${({ $left, $top, $right, $bottom, $zIndex }) =>
        Mixins.Position({
            $left,
            $top,
            $right,
            $bottom,
            $zIndex,
        })}

    &.Visible {
        opacity: 1;
        visibility: visible;
    }
`

setDefaultTheme([StyledBackToTop])

export { StyledBackToTop }
