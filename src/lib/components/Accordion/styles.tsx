/*=============================================== Accordion styles ===============================================*/

import styled, { css } from "styled-components"
import {
    BREAKPOINTS,
    FONT_FAMILIES,
    FONT_SIZES,
    FONT_WEIGHTS,
    LINE_HEIGHTS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type { LibAccordionIcon, LibAccordionVariant } from "../../types"

const StyledAccordion = styled.div<{ $variant: LibAccordionVariant }>`
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    ${({ $variant, theme }) => {
        switch ($variant) {
            case "basic":
                return css`
                    gap: ${SPACERS.S};
                `
            case "rounded":
                return css`
                    border: 1px solid ${theme.GRAY_200};
                    overflow: hidden;
                    border-radius: ${RADIUSES.M};
                `
            default:
                return null
        }
    }}
`

const StyledAccordionButton = styled.button<{ $variant: LibAccordionVariant }>`
    width: 100%;
    font-family: ${FONT_FAMILIES.BODY};
    font-size: ${FONT_SIZES.BODY};
    line-height: ${LINE_HEIGHTS.BODY};
    font-weight: ${FONT_WEIGHTS.BLACK};
    border: none;
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "flex-start",
        $justifyContent: "space-between",
    })}

    ${({ $variant, theme }) => {
        switch ($variant) {
            case "basic":
                return css`
                    background-color: transparent;
                    padding: 0;
                    border-bottom: 1px solid ${theme.GRAY_200};
                    color: ${Mixins.ColorsHoverDefault("primary", theme)};

                    @media ${BREAKPOINTS.HOVER} {
                        &:hover {
                            color: ${Mixins.ColorsHoverHover("primary", theme)};
                        }

                        &:active {
                            color: ${Mixins.ColorsHoverActive(
                                "primary",
                                theme
                            )};
                        }
                    }
                `
            case "rounded":
                return css`
                    background-color: ${Mixins.ColorsHoverDefault(
                        "primary",
                        theme
                    )};
                    color: ${theme.BACKGROUND};
                    padding: ${SPACERS.S};

                    @media ${BREAKPOINTS.HOVER} {
                        &:hover {
                            background-color: ${Mixins.ColorsHoverHover(
                                "primary",
                                theme
                            )};
                        }

                        &:active {
                            background-color: ${Mixins.ColorsHoverActive(
                                "primary",
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

const StyledAccordionItem = styled.div<{ $variant: LibAccordionVariant }>`
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    ${({ $variant, theme }) =>
        $variant === "rounded" &&
        css`
            &:not(:last-child) > ${StyledAccordionButton} {
                border-bottom: 1px solid ${theme.BACKGROUND};
            }
        `}
`

const StyledAccordionIcon = styled.span<{
    $icon?: LibAccordionIcon
}>`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })}

    ${({ $icon }) => {
        switch ($icon) {
            case "chevron":
                return css`
                    transform: rotate(0deg);

                    &.Open {
                        transform: rotate(180deg);
                    }
                `
            case "plus":
                return css`
                    transform: rotate(0deg);

                    &.Open {
                        transform: rotate(45deg);
                    }
                `
            default:
                return null
        }
    }}
`

const StyledAccordionContent = styled.div<{
    $variant: LibAccordionVariant
}>`
    overflow: hidden;
    max-height: 0;
    transition: ${TRANSITIONS.LONG};
    padding: ${({ $variant }) => {
        switch ($variant) {
            case "basic":
                return `0 0`
            case "rounded":
                return `0 ${SPACERS.S}`
            default:
                return null
        }
    }};

    &.Open {
        max-height: 800px;
        padding: ${({ $variant }) => {
            switch ($variant) {
                case "basic":
                    return `${SPACERS.XS} 0`
                case "rounded":
                    return `${SPACERS.XS} ${SPACERS.S}`
                default:
                    return null
            }
        }};
    }
`

setDefaultTheme([
    StyledAccordion,
    StyledAccordionItem,
    StyledAccordionButton,
    StyledAccordionIcon,
    StyledAccordionContent,
])

export {
    StyledAccordion,
    StyledAccordionItem,
    StyledAccordionButton,
    StyledAccordionIcon,
    StyledAccordionContent,
}
