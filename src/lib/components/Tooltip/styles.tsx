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
    top: ${({ $position, $offset }) =>
        $position === "top" && `calc(-100% - ${Mixins.Spacer($offset)})`};
    bottom: ${({ $position, $offset }) =>
        $position === "bottom" && `calc(-100% - ${Mixins.Spacer($offset)})`};
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.ColorsAndOverlays($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};

    &.Visible {
        opacity: 1;
        visibility: visible;
    }

    ${({ $withArrow, $position, $backgroundColor, theme }) =>
        $withArrow &&
        css`
            &:after {
                content: "";
                position: absolute;
                border-style: solid;
                border-width: 4px;
                border-color: ${$position === "bottom"
                    ? `transparent transparent ${Mixins.ColorsAndOverlays(
                          $backgroundColor,
                          theme
                      )} transparent`
                    : `${Mixins.ColorsAndOverlays(
                          $backgroundColor,
                          theme
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
