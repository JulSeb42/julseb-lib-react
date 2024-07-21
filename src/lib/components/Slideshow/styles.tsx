/*=============================================== Slideshow styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import {
    setDefaultTheme,
    Mixins,
    RADIUSES,
    BREAKPOINTS,
    SPACERS,
    Flexbox,
    TRANSITIONS,
} from "../../"
import type {
    LibSlideshowButtonSize,
    LibColorsHover,
    LibSlideshowButtonPosition,
    CssObjectFit,
    LibSlideshowPaginationPosition,
    LibSlideshowPagination,
} from "../../types"

const StyledSlideshow = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        $gap: "xs",
        $flexDirection: "column",
        $alignItems: "center",
        $justifyItems: "center",
    })};
    position: relative;
`

const SlideshowWrapper = styled(Flexbox).attrs({ flexDirection: "column" })<{
    $height: string | number
}>`
    width: 100%;
    height: ${({ $height }) => stringifyPx($height)};
    position: relative;
    overflow: hidden;
`

const SlideshowContentWrapper = styled(Flexbox)`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const SlideshowContent = styled(Flexbox)<{
    $speed: number
    $active: number
    $imgFit: CssObjectFit
}>`
    transition: all ${({ $speed }) => $speed}ms ease;
    width: 100%;
    transform: ${({ $active }) => `translateX(-${$active * 100}%)`};
    height: 100%;

    ${Mixins.HideScrollbar}

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        transition: ${TRANSITIONS.LONG};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: ${({ $imgFit }) => $imgFit};
    }
`

const BUTTON_SIZE = 32
const BUTTON_SIZE_LARGE = 48

const StyledSlideshowButton = styled.button<{
    $size: LibSlideshowButtonSize
    $color: LibColorsHover
    $position: LibSlideshowButtonPosition
    $hideOnTouch: boolean
}>`
    border-radius: ${({ $position, $size }) =>
        $size === "small"
            ? RADIUSES.CIRCLE
            : $position === "left"
            ? `0 ${RADIUSES.M} ${RADIUSES.M} 0`
            : `${RADIUSES.M} 0 0 ${RADIUSES.M}`};
    padding: 0;
    border: none;
    position: absolute;
    z-index: 2;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
    color: ${({ $color, theme }) =>
        $color === "white" || $color === "background"
            ? theme.PRIMARY_500
            : theme.BACKGROUND};
    background-color: ${({ theme, $color }) =>
        Mixins.ColorsHoverDefault($color, theme)};
    width: ${({ $size }) =>
        $size === "large" ? BUTTON_SIZE_LARGE : BUTTON_SIZE}px;
    height: ${({ $size }) =>
        $size === "large" ? BUTTON_SIZE_LARGE : BUTTON_SIZE}px;
    top: calc(
        50% -
            ${({ $size }) =>
                $size === "large" ? BUTTON_SIZE_LARGE : BUTTON_SIZE}px / 2
    );
    left: ${({ $position, $size }) =>
        $position === "right"
            ? null
            : $size === "large"
            ? 0
            : $position === "left" && SPACERS.XS};
    right: ${({ $position, $size }) =>
        $position === "left"
            ? null
            : $size === "large"
            ? 0
            : $position === "right" && SPACERS.XS};

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            background-color: ${({ theme, $color }) =>
                Mixins.ColorsHoverHover($color, theme)};
        }

        &:active {
            background-color: ${({ theme, $color }) =>
                Mixins.ColorsHoverActive($color, theme)};
        }
    }

    ${({ $hideOnTouch }) =>
        $hideOnTouch &&
        css`
            @media ${BREAKPOINTS.TOUCH} {
                display: none;
            }
        `}
`

const StyledSlideshowPagination = styled(Flexbox).attrs({
    justifyContent: "center",
    alignItems: "center",
    gap: "xs",
})<{ $hideOnTouch: boolean; $position: LibSlideshowPaginationPosition }>`
    width: 100%;
    max-width: 70%;

    ${({ $position }) =>
        $position === "inside" &&
        css`
            position: absolute;
            bottom: 8px;
        `}

    ${({ $hideOnTouch }) =>
        $hideOnTouch &&
        css`
            @media ${BREAKPOINTS.TOUCH} {
                display: none;
            }
        `}
`

const DOT_SIZE = 8

const SlideshowPaginationItem = styled.button<{
    $type: LibSlideshowPagination
    $color: LibColorsHover
    $isActive: boolean
}>`
    padding: 0;
    border: none;
    transition: ${TRANSITIONS.SHORT};

    ${({ $type, $color, theme, $isActive }) => {
        switch ($type) {
            case "bars":
                return css`
                    flex-grow: 1;
                    height: 4px;
                    border-radius: ${RADIUSES.ROUND};
                    background-color: ${$isActive
                        ? Mixins.ColorsHoverDefault($color, theme)
                        : Mixins.ColorsHoverHover($color, theme)};

                    @media ${BREAKPOINTS.HOVER} {
                        &:hover {
                            background-color: ${$isActive
                                ? Mixins.ColorsHoverHover($color, theme)
                                : Mixins.ColorsHoverDefault($color, theme)};
                        }

                        &:active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $color,
                                theme
                            )};
                        }
                    }
                `
            case "dots":
                return css`
                    width: ${DOT_SIZE}px;
                    height: ${DOT_SIZE}px;
                    border-radius: 50%;
                    background-color: ${$isActive
                        ? Mixins.ColorsHoverDefault($color, theme)
                        : Mixins.ColorsHoverHover($color, theme)};

                    @media ${BREAKPOINTS.HOVER} {
                        &:hover {
                            background-color: ${$isActive
                                ? Mixins.ColorsHoverHover($color, theme)
                                : Mixins.ColorsHoverDefault($color, theme)};
                        }

                        &:active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $color,
                                theme
                            )};
                        }
                    }
                `
            case "dots-outline":
                return css`
                    width: ${DOT_SIZE}px;
                    height: ${DOT_SIZE}px;
                    border-radius: 50%;
                    background-color: ${$isActive
                        ? Mixins.ColorsHoverDefault($color, theme)
                        : "transparent"};
                    border: 1px solid
                        ${Mixins.ColorsHoverDefault($color, theme)};

                    @media ${BREAKPOINTS.HOVER} {
                        &:hover {
                            border-color: ${Mixins.ColorsHoverHover(
                                $color,
                                theme
                            )};
                            background-color: ${$isActive &&
                            Mixins.ColorsHoverHover($color, theme)};
                        }

                        &:active {
                            border-color: ${Mixins.ColorsHoverActive(
                                $color,
                                theme
                            )};
                            background-color: ${$isActive &&
                            Mixins.ColorsHoverActive($color, theme)};
                        }
                    }
                `
            default:
                return null
        }
    }}
`

const THUMBNAIL_SIZE = 48

const SlideshowThumbnail = styled.button<{ $isActive: boolean }>`
    width: ${THUMBNAIL_SIZE}px;
    height: ${THUMBNAIL_SIZE}px;
    padding: 0;
    border: none;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
    transition: ${TRANSITIONS.SHORT};

    @media ${BREAKPOINTS.HOVER} {
        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.9;
        }
    }
`

setDefaultTheme([
    StyledSlideshow,
    SlideshowWrapper,
    SlideshowContentWrapper,
    SlideshowContent,
    StyledSlideshowButton,
    StyledSlideshowPagination,
    SlideshowPaginationItem,
    SlideshowThumbnail,
])

export {
    StyledSlideshow,
    SlideshowWrapper,
    SlideshowContentWrapper,
    SlideshowContent,
    StyledSlideshowButton,
    StyledSlideshowPagination,
    SlideshowPaginationItem,
    SlideshowThumbnail,
}
