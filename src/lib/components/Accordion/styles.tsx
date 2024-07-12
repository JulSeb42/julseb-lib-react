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

    ${({ $variant, theme }) =>
        $variant === "rounded"
            ? css`
                  border: 1px solid ${theme.GRAY_200};
                  overflow: hidden;
                  border-radius: ${RADIUSES.M};
              `
            : $variant === "basic" &&
              css`
                  gap: ${SPACERS.S};
              `}
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

    ${({ $variant, theme }) =>
        $variant === "rounded"
            ? css`
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
            : $variant === "basic" &&
              css`
                  background-color: transparent;
                  padding: 0;
                  border-bottom: 1px solid ${theme.GRAY_200};
                  color: ${Mixins.ColorsHoverDefault("primary", theme)};

                  @media ${BREAKPOINTS.HOVER} {
                      &:hover {
                          color: ${Mixins.ColorsHoverHover("primary", theme)};
                      }

                      &:active {
                          color: ${Mixins.ColorsHoverActive("primary", theme)};
                      }
                  }
              `}
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
    $isOpen: boolean
    $icon?: LibAccordionIcon
}>`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })}

    ${({ $icon, $isOpen }) =>
        $icon === "chevron"
            ? css`
                  transform: rotate(${$isOpen ? 180 : 0}deg);
              `
            : $icon === "plus" &&
              css`
                  transform: rotate(${$isOpen ? 45 : 0}deg);
              `}
`

const StyledAccordionContent = styled.div<{
    $isOpen: boolean
    $variant: LibAccordionVariant
}>`
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? "800px" : 0)};
    transition: ${TRANSITIONS.LONG};
    padding: ${({ $isOpen, $variant }) =>
        $variant === "rounded"
            ? `${$isOpen ? SPACERS.XS : 0} ${SPACERS.S}`
            : `${$isOpen ? SPACERS.XS : 0} 0`};
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
