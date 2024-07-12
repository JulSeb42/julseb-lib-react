/*=============================================== ListGroup styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
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

const StyledListGroup = styled.div<{ $maxHeight?: number | string }>`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    max-height: ${({ $maxHeight }) => $maxHeight && stringifyPx($maxHeight)};
    overflow: hidden;
    overflow-y: scroll;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    & > *:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.GRAY_200};
    }
`

const StyledListItem = styled.div<{ $isHoverable?: boolean }>`
    padding: ${SPACERS.S};
    text-decoration: none;
    color: ${({ theme }) => theme.FONT};
    border: none;
    width: 100%;
    text-align: left;
    background-color: transparent;
    ${Mixins.Flexbox({
        $flexDirection: "column",
    })}

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

setDefaultTheme([
    StyledListGroup,
    StyledListItem,
    ListItemContent,
    LeftContainer,
    RightContainer,
])

export {
    StyledListGroup,
    StyledListItem,
    ListItemContent,
    LeftContainer,
    RightContainer,
}
