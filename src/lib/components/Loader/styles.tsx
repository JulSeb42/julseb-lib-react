import styled, { css, keyframes } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { Mixins, RADIUSES, setDefaultTheme } from "../../"
import type { LibAllColors } from "../../types"

type LoaderStyle = {
    $size?: number
    $color: LibAllColors
    $borderWidth?: number
}

const Common = ({ $size }: { $size?: number }) => css`
    width: ${$size && stringifyPx($size)};
    height: ${$size && stringifyPx($size)};
    position: relative;
`

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const LOADER_SPIN_ANIMATION = (
    timingFunction: "linear" | "cubic-bezier(0.5, 0, 0.5, 1)" = "linear"
) => css`
    animation: ${Spin} 1200ms ${timingFunction} infinite;
`

const StyledLoaderOne = styled.span<LoaderStyle>`
    ${Common};
    display: inline-block;
    border-radius: ${RADIUSES.CIRCLE};
    border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
    border-bottom-color: ${({ $color, theme }) =>
        Mixins.AllColors($color, theme)};
    ${LOADER_SPIN_ANIMATION()}
`

const StyledLoaderTwo = styled.span<LoaderStyle>`
    ${Common};
    display: inline-block;
    border-radius: ${RADIUSES.CIRCLE};
    border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
    border-top-color: ${({ $color, theme }) => Mixins.AllColors($color, theme)};
    border-bottom-color: ${({ $color, theme }) =>
        Mixins.AllColors($color, theme)};
    ${LOADER_SPIN_ANIMATION()}
`

const StyledLoaderThree = styled.span<LoaderStyle>`
    ${Common};
    display: inline-block;

    span {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
        border-top-color: ${({ $color, theme }) =>
            Mixins.AllColors($color, theme)};
        border-radius: ${RADIUSES.CIRCLE};
        ${LOADER_SPIN_ANIMATION("cubic-bezier(0.5, 0, 0.5, 1)")}

        &:first-child {
            animation-delay: -450ms;
        }

        &:nth-child(2) {
            animation-delay: -300ms;
        }

        &:last-child {
            animation-delay: -150ms;
        }
    }
`

const Flash = keyframes`
    0% {
        opacity: 1;
    }

    50%, 100% {
        opacity: 0.5;
    }
`

const DURATION_LOADER_FOUR = "1000ms" as const

const StyledLoaderFour = styled.span<Omit<LoaderStyle, "$borderWidth">>`
    ${Common};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xxs",
    })}

    span {
        aspect-ratio: 1;
        flex-grow: 1;
        display: inline-block;
        border-radius: ${RADIUSES.CIRCLE};
        background-color: ${({ $color, theme }) =>
            Mixins.AllColors($color, theme)};

        &:first-child {
            animation: ${Flash} ${DURATION_LOADER_FOUR} infinite alternate;
            animation-delay: 0;
        }

        &:nth-child(2) {
            animation: ${Flash} ${DURATION_LOADER_FOUR} infinite linear
                alternate;
            animation-delay: 250ms;
        }

        &:last-child {
            animation: ${Flash} ${DURATION_LOADER_FOUR} infinite alternate;
            animation-delay: 500ms;
        }
    }
`

setDefaultTheme([
    StyledLoaderOne,
    StyledLoaderTwo,
    StyledLoaderThree,
    StyledLoaderFour,
])

export { StyledLoaderOne, StyledLoaderTwo, StyledLoaderThree, StyledLoaderFour }
