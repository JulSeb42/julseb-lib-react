/*=============================================== Stepper styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    RADIUSES,
    FONT_WEIGHTS,
    TRANSITIONS,
} from "../../"
import type { LibColorsHover, LibStepperDirection } from "../../types"

const StyledStep = styled.span<{
    $direction: LibStepperDirection
    $accentColor?: LibColorsHover
    $isActive?: boolean
    $isLink: boolean
}>`
    position: relative;
    z-index: 1;
    text-decoration: none;
    padding: 0;
    border: none;
    background-color: transparent;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xxs",
        $inline: true,
    })}

    small {
        color: ${({ theme, $isLink, $accentColor }) =>
            $isLink ? theme.ColorsHoverDefault($accentColor) : theme.FONT};
        font-weight: ${({ $isLink }) => $isLink && FONT_WEIGHTS.BLACK};
    }

    ${({ $isLink, $accentColor, theme }) =>
        $isLink &&
        css`
            small {
                cursor: pointer;
                transition: ${TRANSITIONS.SHORT};
            }

            &:hover small {
                color: ${theme.ColorsHoverHover($accentColor)};
            }

            &:active small {
                color: ${theme.ColorsHoverActive($accentColor)};
            }
        `}
`

const StyledStepper = styled.div<{
    $direction: LibStepperDirection
    $accentColor: LibColorsHover
}>`
    position: relative;
    ${({ $direction }) =>
        Mixins.Flexbox({
            $alignItems: "flex-start",
            $justifyContent:
                $direction === "column" ? "flex-start" : "space-between",
            $gap: $direction === "column" ? "l" : "xs",
            $flexDirection: $direction,
        })};

    &:before {
        content: "";
        position: absolute;
        left: 12px;
        top: 12px;
        background-color: ${({ theme, $accentColor }) =>
            theme.AllColors($accentColor)};
        z-index: 0;
        width: ${({ $direction }) =>
            $direction === "column" ? "2px" : "calc(100% - 24px)"};
        height: ${({ $direction }) =>
            $direction === "column" ? "calc(100% - 24px)" : "2px"};
    }

    ${StyledStep} {
        flex-direction: ${({ $direction }) =>
            $direction === "column" ? "row" : "column"};
        justify-content: ${({ $direction }) =>
            $direction === "column" ? "flex-start" : "center"};
    }
`

const NUMBER_SIZE = 24

const NumberContainer = styled.span<{
    $isActive: boolean | undefined
    $accentColor: LibColorsHover
}>`
    width: ${NUMBER_SIZE}px;
    height: ${NUMBER_SIZE}px;
    border-radius: ${RADIUSES.CIRCLE};
    outline: 2px solid ${({ theme }) => theme.BACKGROUND};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    font-weight: ${FONT_WEIGHTS.BLACK};
    background-color: ${({ theme, $accentColor, $isActive }) =>
        $isActive
            ? theme.ColorsHoverDefault($accentColor)
            : theme.ColorsHoverHover($accentColor)};
    color: ${({ theme }) => theme.BACKGROUND};
`

setDefaultTheme([StyledStepper, StyledStep, NumberContainer])

export { StyledStepper, StyledStep, NumberContainer }
