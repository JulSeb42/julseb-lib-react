/*=============================================== Header styles ===============================================*/

import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { stringifyPx } from "@julseb-lib/utils"
import {
    setDefaultTheme,
    Image,
    Burger,
    Mixins,
    SPACERS,
    TRANSITIONS,
    FONT_SIZES,
    FONT_WEIGHTS,
    BREAKPOINTS,
    OVERLAYS,
    LINE_HEIGHTS,
} from "../../"
import type {
    LibAllColors,
    LibColorsHover,
    LibHeaderPosition,
    LibHeaderVariant,
    LibNavBurgerPosition,
    LibNavMobileVariant,
} from "../../types"

const LogoImg = styled(Image).attrs({ fit: "contain" })`
    object-position: left center;
    position: relative;
    z-index: 999;
` as any

const Logo = styled(Link)`
    position: relative;
    z-index: 999;
    line-height: ${LINE_HEIGHTS.BODY};
`

const StyledHeaderBurger = styled(Burger)`
    display: none;
    z-index: 999;

    @media ${BREAKPOINTS.MOBILE} {
        display: inherit;
    }
`

const StyledHeader = styled.header<{
    $variant: LibHeaderVariant
    $burgerPosition: LibNavBurgerPosition
    $position: LibHeaderPosition
    $headerHeight: number
    $backgroundColor: LibAllColors
    $textColor: LibAllColors
    $linkColor: LibColorsHover
}>`
    position: ${({ $position }) => $position};
    left: 0;
    top: 0;
    z-index: 999;
    width: 100vw;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "l",
    })};
    padding: ${SPACERS.M} 5vw;
    transition: ${TRANSITIONS.SHORT};
    background-color: ${({ $backgroundColor }) =>
        Mixins.AllColors($backgroundColor)};
    color: ${({ $textColor }) => Mixins.AllColors($textColor)};

    @media ${BREAKPOINTS.MOBILE} {
        height: ${({ $headerHeight }) => $headerHeight}px;
    }

    & > a,
    & > button:not(${StyledHeaderBurger}),
    & > nav > a,
    & > nav > button {
        font-size: ${FONT_SIZES.BODY};
        padding: 0;
        border: none;
        background-color: transparent;
        text-decoration: none;
        font-weight: ${FONT_WEIGHTS.REGULAR};

        &.active,
        &${Logo} {
            font-weight: ${FONT_WEIGHTS.BLACK};
        }
    }

    ${({ $burgerPosition }) =>
        $burgerPosition === "left" &&
        css`
            @media ${BREAKPOINTS.MOBILE} {
                justify-content: flex-start;
                gap: ${SPACERS.XS};
            }
        `}

    ${({ $position, $headerHeight }) =>
        ($position === "absolute" || $position === "fixed") &&
        css`
            top: 0;

            &.Hidden {
                top: calc(${$headerHeight * -1}px - ${SPACERS.S});
            }
        `}

    ${({ $variant, $linkColor }) =>
        ($variant === "white" || $variant === "transparent") &&
        css`
            & > a,
            & > button:not(${StyledHeaderBurger}),
            & > nav > a,
            & > nav > button {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverDefault($linkColor, theme)};

                @media ${BREAKPOINTS.HOVER} {
                    &:hover {
                        color: ${({ theme }) =>
                            Mixins.ColorsHoverHover($linkColor, theme)};
                    }

                    &:active {
                        color: ${({ theme }) =>
                            Mixins.ColorsHoverActive($linkColor, theme)};
                    }
                }
            }

            & > ${Logo} {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverDefault($linkColor, theme)};
            }
        `}
    
    ${({ $variant, theme, $backgroundColor, $textColor, $linkColor }) => {
        switch ($variant) {
            case "white":
                return css`
                    background-color: ${({ theme }) => theme.WHITE};
                `
            case "transparent":
                return css`
                    background-color: transparent;

                    @media ${BREAKPOINTS.MOBILE} {
                        &.Open {
                            background-color: ${theme.PRIMARY_500};

                            & > a,
                            & > button:not(${StyledHeaderBurger}),
                            & > nav > a,
                            & > nav > button {
                                color: ${({ theme }) =>
                                    Mixins.ColorsHoverDefault("white", theme)};

                                @media ${BREAKPOINTS.HOVER} {
                                    &:hover {
                                        color: ${({ theme }) =>
                                            Mixins.ColorsHoverHover(
                                                "white",
                                                theme
                                            )};
                                    }

                                    &:active {
                                        color: ${({ theme }) =>
                                            Mixins.ColorsHoverActive(
                                                "white",
                                                theme
                                            )};
                                    }
                                }
                            }

                            & > ${Logo} {
                                color: ${({ theme }) =>
                                    Mixins.ColorsHoverDefault("white", theme)};
                            }
                        }
                    }
                `
            case "primary":
                return css`
                    background-color: ${Mixins.AllColors(
                        $backgroundColor,
                        theme
                    )};
                    color: ${Mixins.AllColors($textColor, theme)};

                    & > a,
                    & > button:not(${StyledHeaderBurger}),
                    & > nav > a,
                    & > nav > button,
                    & > ${Logo} {
                        color: ${Mixins.ColorsHoverDefault($linkColor, theme)};

                        @media ${BREAKPOINTS.HOVER} {
                            &:hover {
                                color: ${({ theme }) =>
                                    Mixins.ColorsHoverHover($linkColor, theme)};
                            }

                            &:active {
                                color: ${({ theme }) =>
                                    Mixins.ColorsHoverActive(
                                        $linkColor,
                                        theme
                                    )};
                            }
                        }
                    }
                `
        }
    }}
`

const Nav = styled.nav<{
    $navMobileVariant: LibNavMobileVariant | undefined
    $burgerPosition: LibNavBurgerPosition | undefined
    $variant: LibHeaderVariant | undefined
    $headerHeight: number
    $navHeight: number
}>`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "s",
    })};

    ${({ $burgerPosition }) =>
        $burgerPosition === "left" &&
        css`
            flex-grow: 1;
        `}

    @media ${BREAKPOINTS.MOBILE} {
        position: absolute;
        background-color: ${({ theme, $variant }) =>
            $variant === "white" ? theme.WHITE : theme.PRIMARY_500};
        transition: ${TRANSITIONS.SHORT};
        z-index: 997;

        ${({ $navMobileVariant, $headerHeight, $navHeight }) => {
            switch ($navMobileVariant) {
                case "full":
                    return css`
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: -100vw;
                        flex-direction: column;
                        justify-content: center;
                        padding: ${SPACERS.L};

                        & > a,
                        & > button {
                            font-size: ${FONT_SIZES.H5};
                        }

                        &.Open {
                            left: 0;
                        }
                    `
                case "drawer":
                    return css`
                        width: 70%;
                        height: 100vh;
                        top: 0;
                        left: -100vw;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: calc(${$headerHeight}px + ${SPACERS.L}) 5vw
                            ${SPACERS.S};

                        &.Open {
                            left: 0;
                        }
                    `
                case "top":
                    return css`
                        top: calc(
                            (${$navHeight}px + ${SPACERS.M} + ${SPACERS.M}) * -1
                        );
                        left: 0;
                        padding: ${SPACERS.M} 5vw;
                        width: 100%;
                        flex-direction: column;
                        align-items: flex-start;

                        &.Open {
                            top: ${$headerHeight}px;
                        }
                    `
            }
        }}
    }
`

const Overlay = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${OVERLAYS.BLACK_80};
    z-index: 995;
    visibility: hidden;
    opacity: 0;
    transition: ${TRANSITIONS.SHORT};

    &.Visible {
        opacity: 1;
        visibility: visible;
    }
`

const SearchForm = styled.form<{ $maxWidth?: string | number }>`
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};

    @media ${BREAKPOINTS.MOBILE} {
        max-width: 100%;
    }
`

setDefaultTheme([
    LogoImg,
    Logo,
    StyledHeaderBurger,
    StyledHeader,
    Nav,
    Overlay,
    SearchForm,
])

export {
    LogoImg,
    Logo,
    StyledHeaderBurger,
    StyledHeader,
    Nav,
    Overlay,
    SearchForm,
}
