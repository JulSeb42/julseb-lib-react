/*=============================================== ListGroup styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import {
    BREAKPOINTS,
    FONT_SIZES,
    FONT_WEIGHTS,
    LINE_HEIGHTS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type { LibAllColors, LibShadows } from "../../types"

const StyledListGroup = styled.div<{
    $maxHeight?: number | string
    $hasTitleFixed: boolean
}>`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    max-height: ${({ $maxHeight }) => $maxHeight && stringifyPx($maxHeight)};
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    ${({ $hasTitleFixed }) =>
        $hasTitleFixed &&
        css`
            /* padding-top: 49px; */
        `}
`

const CommonItemAndTitle = ({
    $noSeparator,
}: {
    $noSeparator: boolean | undefined
}) => css`
    padding: ${SPACERS.S};
    border: none;
    width: 100%;
    text-align: left;

    ${!$noSeparator &&
    css`
        &:not(:last-child) {
            border-bottom: 1px solid ${({ theme }) => theme.GRAY_200};
        }
    `}
`

const StyledListItem = styled.div<{
    $isHoverable?: boolean
    $noSeparator: boolean | undefined
}>`
    text-decoration: none;
    color: ${({ theme }) => theme.FONT};
    background-color: transparent;
    ${Mixins.Flexbox({
        $flexDirection: "column",
    })}
    ${CommonItemAndTitle}

    ${({ $isHoverable, theme }) =>
        $isHoverable &&
        css`
            transition: ${TRANSITIONS.SHORT};
            color: ${Mixins.ColorsHoverDefault("primary", theme)};

            @media ${BREAKPOINTS.HOVER} {
                &:not(:disabled):hover {
                    background-color: ${Mixins.ColorsHoverHover(
                        "primary",
                        theme
                    )};
                    color: ${theme.BACKGROUND};
                }

                &:not(:disabled):active {
                    background-color: ${Mixins.ColorsHoverActive(
                        "primary",
                        theme
                    )};
                }
            }

            &:disabled {
                background-color: ${theme.GRAY_100};
                color: ${theme.GRAY_500};
            }
        `}

    & > div {
        & > p {
            flex-grow: 1;
        }

        & > span:first-child {
            font-weight: ${FONT_WEIGHTS.REGULAR};
        }
    }
`

const ListItemContent = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        $alignItems: "flex-start",
        $justifyContent: "stretch",
        $gap: "xs",
    })}
`

const CommonContainer = css`
    height: calc(${FONT_SIZES.H6} * ${LINE_HEIGHTS.BODY});
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })}
`

const LeftContainer = styled.span`
    ${CommonContainer}
`

const RightContainer = styled.span`
    ${CommonContainer}
`

const StyledListGroupTitle = styled.div<{
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
    $noSeparator: boolean | undefined
    $isFixed?: boolean
    $shadow?: LibShadows
}>`
    ${CommonItemAndTitle}
    font-weight: ${FONT_WEIGHTS.BLACK};
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ theme, $contentColor }) =>
        Mixins.AllColors($contentColor, theme)};

    ${({ $isFixed }) =>
        $isFixed &&
        css`
            position: sticky;
            top: 0;
            left: 0;
        `}

    &.Scrolled {
        box-shadow: ${({ $shadow }) => Mixins.Shadow($shadow)};
        transition: ${TRANSITIONS.SHORT};
    }
`

setDefaultTheme([
    StyledListGroup,
    StyledListItem,
    ListItemContent,
    LeftContainer,
    RightContainer,
    StyledListGroupTitle,
])

export {
    StyledListGroup,
    StyledListItem,
    ListItemContent,
    LeftContainer,
    RightContainer,
    StyledListGroupTitle,
}
