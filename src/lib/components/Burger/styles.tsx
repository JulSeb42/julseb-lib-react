/*=============================================== Burger styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import {
    BREAKPOINTS,
    RADIUSES,
    TRANSITIONS,
    setDefaultTheme,
    Mixins,
} from "../../"
import type { LibColorsHoverAndCurrent } from "../../types"

const StyledBurger = styled.button<{
    $isOpen: boolean
    $color: LibColorsHoverAndCurrent
    $width: number
    $height: number
    $noHover?: boolean
    $borderWidth: number
}>`
    border: none;
    background-color: transparent;
    position: relative;
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    color: ${({ theme, $color }) => Mixins.ColorsHoverDefault($color, theme)};

    ${({ $noHover, $color, theme }) =>
        !$noHover
            ? css`
                  @media ${BREAKPOINTS.HOVER} {
                      &:hover {
                          color: ${Mixins.ColorsHoverHover($color, theme)};
                      }

                      &:active {
                          color: ${Mixins.ColorsHoverActive($color, theme)};
                      }
                  }
              `
            : css`
                  cursor: inherit;
              `}

    span {
        display: block;
        background-color: currentColor;
        width: 100%;
        height: ${({ $borderWidth }) => stringifyPx($borderWidth)};
        border-radius: ${RADIUSES.ROUND};
        position: absolute;
        left: 0;
        transition: ${TRANSITIONS.SHORT};

        &:first-child {
            top: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            transform: ${({ $isOpen }) => $isOpen && "rotate(45deg)"};
        }

        &:nth-child(2) {
            top: calc(
                50% - ${({ $borderWidth }) => stringifyPx($borderWidth)} / 2
            );
            width: ${({ $isOpen }) => $isOpen && 0};
        }

        &:last-child {
            bottom: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            transform: ${({ $isOpen }) => $isOpen && "rotate(-45deg)"};
        }
    }
`

setDefaultTheme([StyledBurger])

export { StyledBurger }
