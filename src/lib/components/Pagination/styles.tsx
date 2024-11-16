/*=============================================== Pagination styles ===============================================*/

import styled, { css } from "styled-components"
import { setDefaultTheme, MEDIA, Mixins, RADIUSES, TRANSITIONS } from "../../"
import type { LibColorsHover } from "../../types"

const BUTTON_SIZE = 32

const StyledPaginationButton = styled.button<{
    $readOnly?: boolean
    $accentColor: LibColorsHover
}>`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    padding: 0;
    border-radius: ${RADIUSES.CIRCLE};
    border: none;
    background-color: transparent;
    color: ${({ theme, $accentColor }) =>
        Mixins.ColorsHoverDefault($accentColor, theme)};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })}

    &:disabled {
        color: ${({ theme }) => theme.GRAY_500};
    }

    &.Active {
        background-color: ${({ theme, $accentColor }) =>
            Mixins.ColorsHoverDefault($accentColor, theme)};
        color: ${({ theme }) => theme.BACKGROUND};
    }

    ${({ $readOnly, theme, $accentColor }) => {
        switch ($readOnly) {
            case true:
                return css`
                    cursor: default;
                `
            case false:
            case undefined:
                return css`
                    @media ${MEDIA.HOVER} {
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
            default:
                return null
        }
    }}
`

setDefaultTheme([StyledPaginationButton])

export { StyledPaginationButton }
