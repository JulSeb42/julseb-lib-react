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
}>`
    ${Mixins.Position};
    width: ${DEFAULT_BUTTON_SIZE}px;
    height: ${DEFAULT_BUTTON_SIZE}px;
    z-index: 999;
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

const getPositionOpenButton = ($isOpen: boolean, $buttonPosition: number) =>
    $isOpen
        ? `calc(${$buttonPosition} * ${DEFAULT_BUTTON_SIZE}px + ${SPACERS.XS} * ${$buttonPosition})`
        : 0

const StyledButtonIcon = styled(ButtonIcon)<{
    $direction?: LibIconMenuDirection
    $isOpen: boolean
    $buttonPosition: number
}>`
    position: absolute;
    transition: left 200ms ease, top 200ms ease, right 200ms ease,
        bottom 200ms ease;
    display: block;
    overflow: ${({ $isOpen }) => !$isOpen && "hidden"};
    width: ${DEFAULT_BUTTON_SIZE}px;
    height: ${DEFAULT_BUTTON_SIZE}px;
    z-index: ${({ $isOpen, $buttonPosition }) =>
        $isOpen ? $buttonPosition + 1 : 0};

    ${({ $direction, $isOpen, $buttonPosition }) => {
        switch ($direction) {
            case "left":
                return css`
                    top: 0;
                    right: ${getPositionOpenButton($isOpen, $buttonPosition)};
                `
            case "up":
                return css`
                    left: 0;
                    bottom: ${getPositionOpenButton($isOpen, $buttonPosition)};
                `
            case "right":
                return css`
                    top: 0;
                    left: ${getPositionOpenButton($isOpen, $buttonPosition)};
                `
            case "down":
                return css`
                    left: 0;
                    top: ${getPositionOpenButton($isOpen, $buttonPosition)};
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
