/*=============================================== Tabs styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    RADIUSES,
    BREAKPOINTS,
    SPACERS,
    TRANSITIONS,
} from "../../"
import type { LibTabVariant, LibTabJustify } from "../../types"
import type {} from "./types"

const StyledTabsContainer = styled.div`
    ${Mixins.Flexbox({
        $gap: "m",
        $flexDirection: "column",
    })};
`

const StyledTabsButtonsContainer = styled.div<{
    $variant: LibTabVariant
    $justify: LibTabJustify
    $cols: number
}>`
    position: relative;

    ${({ $variant, $justify }) =>
        $variant === "basic"
            ? css`
                  width: ${$justify === "start" ? "100%" : ""};
                  &:after {
                      content: "";
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 1px;
                      background-color: ${({ theme }) => theme.GRAY_200};
                      z-index: 0;
                  }
              `
            : $variant === "rounded" &&
              css`
                  width: ${$justify === "start" ? "fit-content" : ""};
                  background-color: ${({ theme }) => theme.GRAY_50};
                  border-radius: ${RADIUSES.M};
                  padding: ${RADIUSES.XS};
              `}

    ${({ $justify, $cols }) =>
        $justify === "start"
            ? css`
                  ${Mixins.Flexbox({
                      $alignItems: "center",
                      $gap: "xs",
                      $flexWrap: "wrap",
                      $inline: true,
                  })};

                  @media ${BREAKPOINTS.MOBILE} {
                      flex-direction: column;
                  }
              `
            : $justify === "stretch" &&
              css`
                  ${Mixins.Grid({
                      $gap: "xs",
                      $col: $cols,
                  })};

                  @media ${BREAKPOINTS.MOBILE} {
                      grid-template-columns: repeat(1, 1fr);
                  }
              `}
`

const StyledTabButton = styled.button<{
    $variant: LibTabVariant
    $justify: LibTabJustify
    $isActive: boolean
}>`
    border: none;
    padding: 0;
    background-color: transparent;

    ${({ $variant, $justify, $isActive, theme }) =>
        $variant === "basic"
            ? css`
                  min-width: 100px;
                  text-align: left;
                  padding-bottom: ${SPACERS.XXS};
                  border-bottom: 2px solid
                      ${$isActive ? theme.PRIMARY_500 : "transparent"};
                  z-index: 2;
                  color: ${theme.FONT};

                  @media ${BREAKPOINTS.MOBILE} {
                      width: 100%;
                  }
              `
            : $variant === "rounded" &&
              css`
                  border-radius: ${RADIUSES.S};
                  padding: ${SPACERS.XXS};
                  color: ${$isActive ? theme.BACKGROUND : theme.FONT};
                  transition: ${TRANSITIONS.SHORT};
                  min-width: ${$justify === "start" && "100px"};
                  background-color: ${$isActive &&
                  Mixins.ColorsHoverDefault("primary", theme)};

                  @media ${BREAKPOINTS.HOVER} {
                      &:hover {
                          background-color: ${Mixins.ColorsHoverHover(
                              "primary",
                              theme
                          )};
                          color: ${theme.BACKGROUND};
                      }

                      &:active {
                          background-color: ${Mixins.ColorsHoverActive(
                              "primary",
                              theme
                          )};
                      }
                  }
              `}
`

const StyledTabItem = styled.div<{ $isActive: boolean }>`
    ${({ $isActive }) =>
        $isActive
            ? css`
                  ${Mixins.Flexbox({
                      $flexDirection: "column",
                      $alignItems: "stretch",
                  })}
              `
            : css`
                  display: none;
              `}
`

setDefaultTheme([
    StyledTabsContainer,
    StyledTabsButtonsContainer,
    StyledTabButton,
    StyledTabItem,
])

export {
    StyledTabsContainer as StyledTabs,
    StyledTabsButtonsContainer,
    StyledTabButton,
    StyledTabItem,
}
