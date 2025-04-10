import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    TRANSITIONS,
    stringifyPx,
    MEDIA,
} from "../../"
import type {
    LibAllColors,
    LibAllColorsAndOverlays,
    LibColorsHover,
    LibSpacers,
    LibDrawerPosition,
    ILibPadding,
} from "../../types"

const StyledDrawer = styled.div<{
    $zIndex: number
}>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ $zIndex }) => $zIndex};
    opacity: 0;
    visibility: hidden;
    transition: ${TRANSITIONS.SHORT};

    &.Open {
        opacity: 1;
        visibility: visible;
        transition: none;
    }
`

const Overlay = styled.div<{ $overlayColor: LibAllColorsAndOverlays }>`
    background-color: ${({ $overlayColor }) =>
        Mixins.ColorsAndOverlays($overlayColor)};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: ${TRANSITIONS.SHORT};

    &.Open {
        opacity: 1;
        visibility: visible;
    }
`

const DrawerContent = styled.div<{
    $gap: LibSpacers
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
    $linksColor: LibColorsHover
    $width: string | number
    $position: LibDrawerPosition
    $padding: ILibPadding
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: 100%;
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ $contentColor, theme }) =>
        Mixins.AllColors($contentColor, theme)};
    position: absolute;
    top: 0;
    z-index: 1;
    transition: ${TRANSITIONS.SHORT};

    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })}
    ${({ $padding }) => Mixins.Padding($padding)}

    a, button {
        color: ${({ $linksColor, theme }) =>
            Mixins.ColorsHoverDefault($linksColor, theme)};
        text-decoration: none;
        background-color: transparent;
        padding: 0;
        border: none;
        text-align: left;
        transition: ${TRANSITIONS.SHORT};

        @media ${MEDIA.HOVER} {
            &:hover {
                color: ${({ $linksColor, theme }) =>
                    Mixins.ColorsHoverHover($linksColor, theme)};
            }

            &:active {
                color: ${({ $linksColor, theme }) =>
                    Mixins.ColorsHoverActive($linksColor, theme)};
            }
        }
    }

    ${({ $position, $width }) => {
        switch ($position) {
            case "left":
                return css`
                    left: calc(${$width} * -1);

                    &.Open {
                        left: 0;
                    }
                `
            case "right":
                return css`
                    right: calc(${$width} * -1);

                    &.Open {
                        right: 0;
                    }
                `
            default:
                return null
        }
    }}
`

setDefaultTheme([StyledDrawer, Overlay, DrawerContent])

export { StyledDrawer, Overlay, DrawerContent }
