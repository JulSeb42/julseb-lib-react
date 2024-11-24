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
    background: none;
    appearance: none;
    flex-grow: 1;
    -webkit-appearance: none;

    &::-moz-meter-bar {
        -moz-appearance: none;
    }

    &:-moz-meter-optimum::-moz-meter-bar,
    &:-moz-meter-sub-optimum::-moz-meter-bar,
    &:-moz-meter-sub-sub-optimum::-moz-meter-bar {
        background: none;
    }

    &::-webkit-meter-bar,
    &::-webkit-meter-optimum-value,
    &::-webkit-meter-suboptimum-value,
    &::-webkit-meter-even-less-good-value,
    &::-webkit-meter-inner-element {
        background: none;
        background-color: ${({ theme }) => theme.GRAY_200};
        z-index: 0;
    }

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
        z-index: 1;
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
