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
    z-index: ${({ $isVisible }) => $isVisible && 20};
`

const StyledTooltip = styled.div<{
    $isVisible: boolean
    $position?: LibTooltipPosition
    $withArrow?: boolean
    $backgroundColor?: LibAllColorsAndOverlays
    $textColor?: LibAllColors
    $offset: LibSpacers | number
}>`
    max-width: unset;
    white-space: nowrap;
    font-size: ${FONT_SIZES.SMALL};
    transition: ${TRANSITIONS.SHORT};
    padding: ${SPACERS.XXS} ${SPACERS.XS};
    border-radius: ${RADIUSES.M};
    position: absolute;
    top: ${({ $position, $offset }) =>
        $position === "top" && `calc(-100% - ${Mixins.Spacer($offset)})`};
    bottom: ${({ $position, $offset }) =>
        $position === "bottom" && `calc(-100% - ${Mixins.Spacer($offset)})`};
    left: 50%;
    transform: translateX(-50%);
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    background-color: ${({ theme, $backgroundColor }) =>
        theme.ColorsAndOverlays($backgroundColor)};
    color: ${({ theme, $textColor }) => theme.AllColors($textColor)};

    ${({ $withArrow, $position, $backgroundColor, theme }) =>
        $withArrow &&
        css`
            &:after {
                content: "";
                position: absolute;
                border-style: solid;
                border-width: 4px;
                border-color: ${$position === "bottom"
                    ? `transparent transparent ${theme.ColorsAndOverlays(
                          $backgroundColor
                      )} transparent`
                    : `${theme.ColorsAndOverlays(
                          $backgroundColor
                      )} transparent transparent transparent`};
                left: 50%;
                transform: translateX(-50%);
                top: ${$position === "top" && "100%"};
                bottom: ${$position === "bottom" && "100%"};
            }
        `}
`

setDefaultTheme([TooltipWrapper, StyledTooltip])

export { TooltipWrapper, StyledTooltip }
