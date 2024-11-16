/*=============================================== Burger styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { MEDIA, RADIUSES, TRANSITIONS, setDefaultTheme, Mixins } from "../../"
import type { LibColorsHoverAndCurrent } from "../../types"

const StyledBurger = styled.button<{
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

    ${({ $noHover, $color, theme }) => {
        switch ($noHover) {
            case true:
                return css`
                    cursor: inherit;
                `
            case false:
            case undefined:
                return css`
                    @media ${MEDIA.HOVER} {
                        &:hover {
                            color: ${Mixins.ColorsHoverHover($color, theme)};
                        }

                        &:active {
                            color: ${Mixins.ColorsHoverActive($color, theme)};
                        }
                    }
                `
            default:
                return null
        }
    }}

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
            top: 0;
        }

        &:nth-child(2) {
            top: calc(
                50% - ${({ $borderWidth }) => stringifyPx($borderWidth)} / 2
            );
        }

        &:last-child {
            bottom: 0;
        }
    }

    &.Open span {
        &:first-child {
            top: 45%;
            transform: rotate(45deg);
        }

        &:nth-child(2) {
            top: calc(
                50% - ${({ $borderWidth }) => stringifyPx($borderWidth)} / 2
            );
            width: 0;
        }

        &:last-child {
            bottom: 45%;
            transform: rotate(-45deg);
        }
    }
`

setDefaultTheme([StyledBurger])

export { StyledBurger }
