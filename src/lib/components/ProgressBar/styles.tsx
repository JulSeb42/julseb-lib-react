/*=============================================== ProgressBar styles ===============================================*/

import styled, { keyframes } from "styled-components"
import { setDefaultTheme, RADIUSES, TRANSITIONS, Mixins } from "../../"
import type { LibColorsHover } from "../../types"

const Progress = keyframes`
    0% {
        width: 0;
    }

    100% {
        width: var(--progress-value);
    }
`

const StyledProgressBar = styled.meter<{
    $color: LibColorsHover
}>`
    width: 100%;
    height: 16px;
    background-color: ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.ROUND};
    position: relative;
    display: block;
    overflow: hidden;
    border: none;
    appearance: none;
    flex-grow: 1;

    &:before {
        content: "";
        position: absolute;
        transition: ${TRANSITIONS.SHORT};
        line-height: 100%;
        height: 100%;
        top: 0;
        width: var(--progress-value);
        background-color: ${({ theme, $color }) =>
            Mixins.AllColors($color, theme)};
        border-radius: ${RADIUSES.ROUND};
    }

    &.RadiusCircle:before {
        border-radius: ${RADIUSES.CIRCLE};
    }

    &.Animated:before {
        animation: ${Progress} calc(var(--progress-speed) * 50ms) 1;
    }
`

setDefaultTheme([StyledProgressBar])

export { StyledProgressBar }
