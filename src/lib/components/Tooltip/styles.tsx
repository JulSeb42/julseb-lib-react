/*=============================================== Tooltip styles ===============================================*/

import styled, { css } from "styled-components"
import {
    FONT_SIZES,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type {
    LibAllColors,
    LibAllColorsAndOverlays,
    LibSpacers,
    LibTooltipPosition,
} from "../../types"

const TooltipWrapper = styled.div<{ $isVisible: boolean }>`
    position: relative;
    width: fit-content;
    display: inline-block;

    &.Visible {
        z-index: 20;
    }
`

const StyledTooltip = styled.div<{
    $position?: LibTooltipPosition
    $withArrow?: boolean
    $backgroundColor: LibAllColorsAndOverlays
    $textColor: LibAllColors
    $offset: LibSpacers | number
}>`
    max-width: unset;
    white-space: nowrap;
    font-size: ${FONT_SIZES.SMALL};
    transition: ${TRANSITIONS.SHORT};
    padding: ${SPACERS.XXS} ${SPACERS.XS};
    border-radius: ${RADIUSES.M};
    position: absolute;
    opacity: 0;
    visibility: hidden;
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.ColorsAndOverlays($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};

    &.Visible {
        opacity: 1;
        visibility: visible;
    }

    ${({ $position, $offset }) => {
        switch ($position) {
            case "left":
                return css`
                    left: calc(-100% - ${Mixins.Spacer($offset)});
                    top: 50%;
                    transform: translateY(-50%);
                `
            case "top":
                return css`
                    top: calc(-100% - ${Mixins.Spacer($offset)});
                    left: 50%;
                    transform: translateX(-50%);
                `
            case "right":
                return css`
                    right: calc(-100% - ${Mixins.Spacer($offset)});
                    top: 50%;
                    transform: translateY(-50%);
                `
            case "bottom":
                return css`
                    bottom: calc(-100% - ${Mixins.Spacer($offset)});
                    left: 50%;
                    transform: translateX(-50%);
                `
            default:
                return null
        }
    }}

    ${({ $withArrow, $position, $backgroundColor, theme }) =>
        $withArrow &&
        css`
            &:after {
                content: "";
                position: absolute;
                border-style: solid;
                border-width: 4px;

                ${() => {
                    switch ($position) {
                        case "left":
                            return css`
                                right: -8px;
                                top: 50%;
                                transform: translateY(-50%);
                                border-color: transparent transparent
                                    transparent
                                    ${Mixins.ColorsAndOverlays(
                                        $backgroundColor,
                                        theme
                                    )};
                            `
                        case "top":
                            return css`
                                top: 100%;
                                left: 50%;
                                transform: translateX(-50%);
                                border-color: ${Mixins.ColorsAndOverlays(
                                        $backgroundColor,
                                        theme
                                    )}
                                    transparent transparent transparent;
                            `
                        case "right":
                            return css`
                                left: -8px;
                                top: 50%;
                                transform: translateY(-50%);
                                border-color: transparent
                                    ${Mixins.ColorsAndOverlays(
                                        $backgroundColor,
                                        theme
                                    )}
                                    transparent transparent;
                            `
                        case "bottom":
                            return css`
                                bottom: 100%;
                                left: 50%;
                                transform: translateX(-50%);
                                border-color: transparent transparent
                                    ${Mixins.ColorsAndOverlays(
                                        $backgroundColor,
                                        theme
                                    )}
                                    transparent;
                            `
                    }
                }}
            }
        `}
`

setDefaultTheme([TooltipWrapper, StyledTooltip])

export { TooltipWrapper, StyledTooltip }
