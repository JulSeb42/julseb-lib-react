/*=============================================== IconMenu styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    TRANSITIONS,
    ButtonIcon,
    Mixins,
    SPACERS,
} from "../../"
import { Plus } from "../../icons"
import type {
    LibIconMenuDirection,
    LibPositionExtract,
    LibSpacers,
} from "../../types"
import type {} from "./types"

const DEFAULT_BUTTON_SIZE = 48

const StyledIconMenu = styled.nav<{
    $position?: LibPositionExtract
    $left?: LibSpacers
    $top?: LibSpacers
    $right?: LibSpacers
    $bottom?: LibSpacers
    $zIndex?: number
}>`
    ${Mixins.Position};
    width: ${DEFAULT_BUTTON_SIZE}px;
    height: ${DEFAULT_BUTTON_SIZE}px;
`

const OpenButton = styled(ButtonIcon).attrs({ size: DEFAULT_BUTTON_SIZE })`
    position: relative;
    z-index: 1;
`

const OpenIcon = styled(Plus).attrs({ size: DEFAULT_BUTTON_SIZE })<{
    $isOpen: boolean
}>`
    transition: ${TRANSITIONS.SHORT};
    transform: rotate(${({ $isOpen }) => ($isOpen ? 45 : 0)}deg);
`

const getPosition = () =>
    `calc(var(--button-position) * ${DEFAULT_BUTTON_SIZE}px + ${SPACERS.XS} * var(--button-position))`

const StyledButtonIcon = styled(ButtonIcon)<{
    $direction?: LibIconMenuDirection
}>`
    position: absolute;
    transition: left 200ms ease, top 200ms ease, right 200ms ease,
        bottom 200ms ease;
    display: block;
    overflow: hidden;
    width: ${DEFAULT_BUTTON_SIZE}px;
    height: ${DEFAULT_BUTTON_SIZE}px;
    z-index: 0;

    &.Open {
        z-index: calc(var(--button-position) + 1);
        overflow: visible;
    }

    ${({ $direction }) => {
        switch ($direction) {
            case "left":
                return css`
                    top: 0;
                    right: 0;

                    &.Open {
                        right: ${getPosition()};
                    }
                `
            case "up":
                return css`
                    left: 0;
                    bottom: 0;

                    &.Open {
                        bottom: ${getPosition()};
                    }
                `
            case "right":
                return css`
                    top: 0;
                    left: 0;

                    &.Open {
                        left: ${getPosition()};
                    }
                `
            case "down":
                return css`
                    left: 0;
                    top: 0;

                    &.Open {
                        top: ${getPosition()};
                    }
                `
        }
    }}
`

setDefaultTheme([StyledIconMenu, OpenButton, OpenIcon, StyledButtonIcon])

export {
    StyledIconMenu,
    OpenButton,
    OpenIcon,
    StyledButtonIcon,
    DEFAULT_BUTTON_SIZE,
}
