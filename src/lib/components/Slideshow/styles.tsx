import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import {
    setDefaultTheme,
    Mixins,
    RADIUSES,
    MEDIA,
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
    left: ${({ $position, $size }) => {
        if ($position === "right") return null
        if ($size === "large") return "0"
        if ($position === "left") return SPACERS.XS
        return null
    }};
    right: ${({ $position, $size }) => {
        if ($position === "left") return null
        if ($size === "large") return "0"
        if ($position === "right") return SPACERS.XS
        return null
    }};

    @media ${MEDIA.HOVER} {
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
            @media ${MEDIA.TOUCH} {
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
            @media ${MEDIA.TOUCH} {
                display: none;
            }
        `}
`

const DOT_SIZE = 8

const SlideshowPaginationItem = styled.button<{
    $type: LibSlideshowPagination
    $color: LibColorsHover
}>`
    padding: 0;
    border: none;
    transition: ${TRANSITIONS.SHORT};

    ${({ $type, $color, theme }) => {
        switch ($type) {
            case "bars":
                return css`
                    flex-grow: 1;
                    height: 4px;
                    border-radius: ${RADIUSES.ROUND};
                    background-color: ${Mixins.ColorsHoverHover($color, theme)};

                    @media ${MEDIA.HOVER} {
                        &:hover {
                            background-color: ${Mixins.ColorsHoverDefault(
                                $color,
                                theme
                            )};
                        }

                        &:active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $color,
                                theme
                            )};
                        }
                    }

                    &.Active {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $color,
                            theme
                        )};

                        @media ${MEDIA.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $color,
                                    theme
                                )};
                            }
                        }
                    }
                `
            case "dots":
                return css`
                    width: ${DOT_SIZE}px;
                    height: ${DOT_SIZE}px;
                    border-radius: 50%;
                    background-color: ${Mixins.ColorsHoverHover($color, theme)};

                    @media ${MEDIA.HOVER} {
                        &:hover {
                            background-color: ${Mixins.ColorsHoverDefault(
                                $color,
                                theme
                            )};
                        }

                        &:active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $color,
                                theme
                            )};
                        }
                    }

                    &.Active {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $color,
                            theme
                        )};

                        @media ${MEDIA.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $color,
                                    theme
                                )};
                            }
                        }
                    }
                `
            case "dots-outline":
                return css`
                    width: ${DOT_SIZE}px;
                    height: ${DOT_SIZE}px;
                    border-radius: 50%;
                    background-color: transparent;
                    border: 1px solid
                        ${Mixins.ColorsHoverDefault($color, theme)};

                    @media ${MEDIA.HOVER} {
                        &:hover {
                            border-color: ${Mixins.ColorsHoverHover(
                                $color,
                                theme
                            )};
                        }

                        &:active {
                            border-color: ${Mixins.ColorsHoverActive(
                                $color,
                                theme
                            )};
                        }
                    }

                    &.Active {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $color,
                            theme
                        )};

                        @media ${MEDIA.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $color,
                                    theme
                                )};
                            }

                            &:active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $color,
                                    theme
                                )};
                            }
                        }
                    }
                `
            default:
                return null
        }
    }}
`

const THUMBNAIL_SIZE = 48

const SlideshowThumbnail = styled.button`
    width: ${THUMBNAIL_SIZE}px;
    height: ${THUMBNAIL_SIZE}px;
    padding: 0;
    border: none;
    opacity: 0.5;
    transition: ${TRANSITIONS.SHORT};

    @media ${MEDIA.HOVER} {
        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.9;
        }
    }

    &.Active {
        opacity: 1;
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
