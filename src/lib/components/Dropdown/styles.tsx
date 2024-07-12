/*=============================================== Dropdown styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import {
    BREAKPOINTS,
    FONT_FAMILIES,
    FONT_SIZES,
    FONT_WEIGHTS,
    Flexbox,
    LINE_HEIGHTS,
    Mixins,
    RADIUSES,
    SHADOWS,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type { LibColorsHover, LibListDirection, LibSpacers } from "../../types"

const StyledDropdown = styled.div<{
    $isOpen: boolean
    $direction: LibListDirection
    $maxHeight: number
    $buttonOpenHeight: number
}>`
    position: absolute;
    min-width: 200px;
    max-width: 100%;
    border-radius: ${RADIUSES.M};
    overflow: hidden;
    overflow-y: scroll;
    box-shadow: ${({ $isOpen }) => $isOpen && SHADOWS.M};
    max-height: ${({ $maxHeight, $isOpen }) =>
        $isOpen ? stringifyPx($maxHeight) : 0};
    transition: ${TRANSITIONS.SHORT};
    background-color: ${({ theme }) => theme.BACKGROUND};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    ${({ $direction, $buttonOpenHeight }) =>
        $direction === "up"
            ? css`
                  bottom: ${stringifyPx($buttonOpenHeight)};
              `
            : $direction === "down" &&
              css`
                  top: ${stringifyPx($buttonOpenHeight)};
              `}
`

const StyledDropdownContainer = styled(Flexbox)<{ $isOpen: boolean }>`
    position: relative;
    z-index: ${({ $isOpen }) => ($isOpen ? 20 : 0)};

    & > ${StyledDropdown} {
        ${({ justifyContent }) =>
            justifyContent === "flex-end"
                ? css`
                      right: 0;
                  `
                : justifyContent === "flex-start" &&
                  css`
                      left: 0;
                  `}
    }
`

const StyledDropdownItem = styled.button<{
    $accentColor: LibColorsHover
    $gap: LibSpacers
}>`
    text-decoration: none;
    text-align: left;
    padding: ${SPACERS.XS} ${SPACERS.S};
    font-size: ${FONT_SIZES.BODY};
    font-family: ${FONT_FAMILIES.BODY};
    font-weight: ${FONT_WEIGHTS.BLACK};
    line-height: ${LINE_HEIGHTS.BODY};
    background-color: transparent;
    border: none;
    color: ${({ theme, $accentColor }) =>
        Mixins.ColorsHoverDefault($accentColor, theme)};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
        })}

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            background-color: ${({ theme, $accentColor }) =>
                Mixins.ColorsHoverHover($accentColor, theme)};
            color: ${({ theme }) => theme.BACKGROUND};
        }

        &:active {
            background-color: ${({ theme, $accentColor }) =>
                Mixins.ColorsHoverActive($accentColor, theme)};
        }
    }
`

const IconContainer = styled.span`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })}
`

const TextContent = styled.span`
    width: 100%;
`

setDefaultTheme([
    StyledDropdownContainer,
    StyledDropdown,
    StyledDropdownItem,
    IconContainer,
    TextContent,
])

export {
    StyledDropdownContainer,
    StyledDropdown,
    StyledDropdownItem,
    IconContainer,
    TextContent,
}
