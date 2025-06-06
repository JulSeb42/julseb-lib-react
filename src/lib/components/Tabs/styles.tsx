import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    RADIUSES,
    MEDIA,
    SPACERS,
    TRANSITIONS,
} from "../../"
import type { LibTabVariant, LibTabJustify } from "../../types"

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

    ${({ $variant, $justify, theme }) => {
        switch ($variant) {
            case "basic":
                return css`
                    width: ${$justify === "start" && "100%"};

                    &:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background-color: ${theme.GRAY_200};
                        z-index: 0;
                    }
                `
            case "rounded":
                return css`
                    width: ${$justify === "start" ? "fit-content" : ""};
                    background-color: ${theme.GRAY_50};
                    border-radius: ${RADIUSES.M};
                    padding: ${RADIUSES.XS};
                `
            default:
                return null
        }
    }}

    ${({ $justify, $cols }) => {
        switch ($justify) {
            case "start":
                return css`
                    ${Mixins.Flexbox({
                        $alignItems: "center",
                        $gap: "xs",
                        $flexWrap: "wrap",
                        $inline: true,
                    })};

                    @media ${MEDIA.BREAKPOINT_MOBILE} {
                        flex-direction: column;
                    }
                `
            case "stretch":
                return css`
                    ${Mixins.Grid({
                        $gap: "xs",
                        $col: $cols,
                    })};

                    @media ${MEDIA.BREAKPOINT_MOBILE} {
                        grid-template-columns: repeat(1, 1fr);
                    }
                `
            default:
                return null
        }
    }}
`

const StyledTabButton = styled.button<{
    $variant: LibTabVariant
    $justify: LibTabJustify
}>`
    border: none;
    padding: 0;
    background-color: transparent;

    ${({ $variant, $justify, theme }) => {
        switch ($variant) {
            case "basic":
                return css`
                    min-width: 100px;
                    text-align: left;
                    padding-bottom: ${SPACERS.XXS};
                    border-bottom: 2px solid transparent;
                    z-index: 2;
                    color: ${theme.FONT};

                    @media ${MEDIA.BREAKPOINT_MOBILE} {
                        width: 100%;
                    }

                    &.Active {
                        border-bottom-color: ${theme.PRIMARY_500};
                    }
                `
            case "rounded":
                return css`
                    border-radius: ${RADIUSES.S};
                    padding: ${SPACERS.XXS};
                    transition: ${TRANSITIONS.SHORT};
                    min-width: ${$justify === "start" && "100px"};
                    color: ${theme.FONT};

                    @media ${MEDIA.HOVER} {
                        &:hover {
                            background-color: ${Mixins.ColorsHoverHover(
                                "primary",
                                theme
                            )};
                            color: ${theme.WHITE};
                        }

                        &:active {
                            background-color: ${Mixins.ColorsHoverActive(
                                "primary",
                                theme
                            )};
                        }()
                    }

                    &.Active {
                        color: ${theme.WHITE};
                        background-color: ${Mixins.ColorsHoverDefault(
                            "primary",
                            theme
                        )};
                    }
                `
            default:
                return null
        }
    }}
`

const StyledTabItem = styled.div`
    display: none;

    &.Active {
        ${Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
        })}
    }
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
