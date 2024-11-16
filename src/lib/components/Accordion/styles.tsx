/*=============================================== Accordion styles ===============================================*/

import styled from "styled-components"
import {
    MEDIA,
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

const StyledAccordion = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &.Basic {
        gap: ${SPACERS.S};
    }

    &.Rounded {
        border: 1px solid ${({ theme }) => theme.GRAY_200};
        overflow: hidden;
        border-radius: ${RADIUSES.M};
    }
`

const StyledAccordionButton = styled.button`
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

    &.Basic {
        background-color: transparent;
        padding: 0;
        border-bottom: 1px solid ${({ theme }) => theme.GRAY_200};
        color: ${({ theme }) => Mixins.ColorsHoverDefault("primary", theme)};

        @media ${MEDIA.HOVER} {
            &:hover {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverHover("primary", theme)};
            }

            &:active {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverActive("primary", theme)};
            }
        }
    }

    &.Rounded {
        background-color: ${({ theme }) =>
            Mixins.ColorsHoverDefault("primary", theme)};
        color: ${({ theme }) => theme.BACKGROUND};
        padding: ${SPACERS.S};

        @media ${MEDIA.HOVER} {
            &:hover {
                background-color: ${({ theme }) =>
                    Mixins.ColorsHoverHover("primary", theme)};
            }

            &:active {
                background-color: ${({ theme }) =>
                    Mixins.ColorsHoverActive("primary", theme)};
            }
        }
    }
`

const StyledAccordionItem = styled.div`
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &.Rounded {
        &:not(:last-child) > ${StyledAccordionButton} {
            border-bottom: 1px solid ${({ theme }) => theme.BACKGROUND};
        }
    }
`

const StyledAccordionIcon = styled.span`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })}

    &.Chevron {
        transform: rotate(0deg);

        &.Open {
            transform: rotate(180deg);
        }
    }

    &.Plus {
        transform: rotate(0deg);

        &.Open {
            transform: rotate(45deg);
        }
    }
`

const StyledAccordionContent = styled.div`
    overflow: hidden;
    max-height: 0;
    transition: ${TRANSITIONS.LONG};

    &.Basic {
        padding: 0 0;
    }

    &.Rounded {
        padding: 0 ${SPACERS.S};
    }

    &.Open {
        max-height: 800px;

        &.Basic {
            padding: ${SPACERS.XS} 0;
        }

        &.Rounded {
            padding: ${SPACERS.XS} ${SPACERS.S};
        }
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
