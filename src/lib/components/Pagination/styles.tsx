/*=============================================== Pagination styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    BREAKPOINTS,
    Mixins,
    RADIUSES,
    TRANSITIONS,
} from "../../"
import type { LibColorsHover } from "../../types"

const BUTTON_SIZE = 32

const StyledPaginationButton = styled.button<{
    $isActive?: boolean
    $readOnly?: boolean
    $accentColor: LibColorsHover
}>`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    padding: 0;
    border-radius: ${RADIUSES.CIRCLE};
    border: none;
    background-color: ${({ $isActive, theme, $accentColor }) =>
        $isActive
            ? Mixins.ColorsHoverDefault($accentColor, theme)
            : "transparent"};
    color: ${({ $isActive, theme, $accentColor }) =>
        $isActive
            ? theme.BACKGROUND
            : Mixins.ColorsHoverDefault($accentColor, theme)};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })}

    &:disabled {
        color: ${({ theme }) => theme.GRAY_500};
    }

    ${({ $readOnly, theme, $accentColor }) =>
        !$readOnly
            ? css`
                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          background-color: ${Mixins.ColorsHoverHover(
                              $accentColor,
                              theme
                          )};
                          color: ${({ theme }) => theme.BACKGROUND};
                      }

                      &:not(:disabled):active {
                          background-color: ${Mixins.ColorsHoverActive(
                              $accentColor,
                              theme
                          )};
                      }
                  }
              `
            : css`
                  cursor: default;
              `}
`

setDefaultTheme([StyledPaginationButton])

export { StyledPaginationButton }
