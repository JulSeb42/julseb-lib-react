/*=============================================== Toast styles ===============================================*/

import styled, { keyframes, css } from "styled-components"
import {
    MEDIA,
    FONT_SIZES,
    LINE_HEIGHTS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type {
    LibAllColors,
    ILibBorder,
    LibShadows,
    LibToasterPosition,
} from "../../types"

const OpenFromLeft = keyframes`
    0% { transform: translateX(-100%); }

    100% { transform: translateX(0); }
`

const CloseFromLeft = keyframes`
    0% { transform: translateX(0); }

    100% { transform: translateX(-100%); }
`

const OpenFromRight = keyframes`
    0% { transform: translateX(100%); }

    100% { transform: translateX(0); }
`

const CloseFromRight = keyframes`
    0% { transform: translateX(0); }

    100% { transform: translateX(100%); }
`

const StyledToast = styled.div<{
    $backgroundColor: LibAllColors
    $textColor: LibAllColors
    $border: ILibBorder
    $shadow?: LibShadows
    $toasterPosition?: LibToasterPosition
}>`
    position: relative;
    width: 100%;
    padding: ${SPACERS.S};
    border-radius: ${RADIUSES.M};
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};
    transition: ${TRANSITIONS.SHORT};
    overflow: hidden;
    ${({ $border }) => Mixins.Border($border)};
    ${({ $shadow }) => Mixins.Shadow($shadow)};

    ${({ $toasterPosition }) => {
        const speedAndFunction = "200ms ease"

        switch ($toasterPosition) {
            case "top-left":
            case "bottom-left":
                return css`
                    animation: ${CloseFromLeft} ${speedAndFunction};

                    &.Open {
                        animation: ${OpenFromLeft} ${speedAndFunction};
                    }
                `
            case "top-right":
            case "bottom-right":
                return css`
                    animation: ${CloseFromRight} ${speedAndFunction};

                    &.Open {
                        animation: ${OpenFromRight} ${speedAndFunction};
                    }
                `
            default:
                return null
        }
    }}
`

const TitleContainer = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        $gap: "xs",
    })}

    & > p {
        flex-grow: 1;
    }
`

const ICON_CONTAINER_SIZE = 24

const IconContainer = styled.span`
    height: calc(${FONT_SIZES.H6} * ${LINE_HEIGHTS.BODY});
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

const CloseButton = styled.button`
    width: ${ICON_CONTAINER_SIZE}px;
    height: ${ICON_CONTAINER_SIZE}px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => Mixins.ColorsHoverDefault("gray", theme)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}

    @media ${MEDIA.HOVER} {
        &:hover {
            color: ${({ theme }) => Mixins.ColorsHoverHover("gray", theme)};
        }

        &:active {
            color: ${({ theme }) => Mixins.ColorsHoverActive("gray", theme)};
        }
    }
`

const Progress = keyframes`
    0% { width: 100%; }

    100% { width: 0; }
`

const Timer = styled.span<{
    $backgroundColor: LibAllColors
    $duration: number
}>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.AllColors($backgroundColor, theme)};
    animation: ${Progress} ${({ $duration }) => $duration}ms linear forwards;
`

const StyledToaster = styled.div<{ $position: LibToasterPosition }>`
    position: fixed;
    width: 300px;
    height: fit-content;
    max-height: 100vh;
    z-index: 9999;
    overflow-y: scroll;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $justifyContent: "flex-end",
        $gap: "s",
    })}

    ${({ $position }) => {
        const SPACING = SPACERS.S

        switch ($position) {
            case "top-left":
                return css`
                    left: ${SPACING};
                    top: ${SPACING};
                `
            case "top-right":
                return css`
                    right: ${SPACING};
                    top: ${SPACING};
                `
            case "bottom-left":
                return css`
                    left: ${SPACING};
                    bottom: ${SPACING};
                `
            case "bottom-right":
                return css`
                    right: ${SPACING};
                    bottom: ${SPACING};
                `
            default:
                return null
        }
    }}
`

setDefaultTheme([
    StyledToast,
    TitleContainer,
    IconContainer,
    CloseButton,
    Timer,
    StyledToaster,
])

export {
    StyledToast,
    TitleContainer,
    IconContainer,
    CloseButton,
    Timer,
    StyledToaster,
}
