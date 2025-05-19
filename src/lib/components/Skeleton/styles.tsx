import styled, { css, keyframes } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Flexbox, Mixins } from "../.."
import type { ILibBorder, ILibPadding, LibSkeletonAnimation } from "../../types"
import type { ILibSkeletonCommonStyles } from "./subtypes"

const ShineLoad = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 106%;
    }
`

const Pulse = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`

const Common = ({
    $width = "100%",
    $maxWidth,
    $height,
    $backgroundColor = "background",
    $aspectRatio,
    $borderRadius,
    $flex,
    $flexGrow,
}: ILibSkeletonCommonStyles) => css`
    position: relative;
    overflow: hidden;
    width: ${stringifyPx($width)};
    max-width: ${$maxWidth && stringifyPx($maxWidth)};
    height: ${$height && stringifyPx($height)};
    background-color: ${({ theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    aspect-ratio: ${$aspectRatio};
    flex: ${$flex};
    flex-grow: ${$flexGrow};
    ${Mixins.BorderRadius($borderRadius)}
`

const Shine = css`
    position: absolute;
    top: -200px;
    bottom: -200px;
    width: 100px;
    filter: blur(20px);
    transform: skew(-15deg);
    background-color: ${({ theme }) => theme.WHITE};
    animation: ${ShineLoad} 2000ms infinite;
    opacity: 0.7;
`

const StyledSkeletonCard = styled(Flexbox)<
    ILibSkeletonCommonStyles & { $border?: ILibBorder; $padding?: ILibPadding }
>`
    ${Common}
    ${({ $border }) => Mixins.Border($border)}
    ${({ $padding }) => Mixins.Padding($padding)}
`

const StyledSkeletonShine = styled.span`
    ${Shine}
`

const StyledSkeleton = styled.div<
    ILibSkeletonCommonStyles & { $animation?: LibSkeletonAnimation }
>`
    ${Common}
    ${({ $animation }) =>
        $animation === "pulse"
            ? css`
                  animation: ${Pulse} 1000ms infinite alternate;
              `
            : $animation === "shine" &&
              css`
                  &:after {
                      content: "";
                      ${Shine}
                  }
              `}
`

setDefaultTheme([StyledSkeletonShine, StyledSkeletonCard, StyledSkeleton])

export { StyledSkeletonShine, StyledSkeletonCard, StyledSkeleton }
