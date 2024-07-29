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
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type {
    LibShadows,
    LibColorsHover,
    LibInputListDirection,
    LibSpacers,
} from "../../types"

const StyledDropdown = styled.div<{
    $direction: LibInputListDirection
    $maxHeight: number
    $buttonOpenHeight: number
    $shadow?: LibShadows
}>`
    position: absolute;
    min-width: 200px;
    max-width: 100%;
    border-radius: ${RADIUSES.M};
    overflow: hidden;
    overflow-y: scroll;
    max-height: 0;
    transition: ${TRANSITIONS.SHORT};
    background-color: ${({ theme }) => theme.BACKGROUND};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    ${({ $direction, $buttonOpenHeight }) => {
        switch ($direction) {
            case "up":
                return css`
                    bottom: ${stringifyPx($buttonOpenHeight)};
                `
            case "down":
                return css`
                    top: ${stringifyPx($buttonOpenHeight)};
                `
            default:
                return css``
        }
    }}

&.Open {
        box-shadow: ${({ $shadow }) => Mixins.Shadow($shadow)};
        max-height: ${({ $maxHeight }) => stringifyPx($maxHeight)};
    }
`

const StyledDropdownContainer = styled(Flexbox)`
    position: relative;
    z-index: 0;

    & > ${StyledDropdown} {
        ${({ justifyContent }) => {
            switch (justifyContent) {
                case "flex-end":
                    return css`
                        right: 0;
                    `
                case "flex-start":
                    return css`
                        left: 0;
                    `
            }
        }}
    }

    &.Open {
        z-index: 20;
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
