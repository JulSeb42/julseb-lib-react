/*=============================================== Text styles ===============================================*/

import styled, { css } from "styled-components"
import {
    BREAKPOINTS,
    FONT_SIZES,
    FONT_WEIGHTS,
    Mixins,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import { TextBaseMixin } from "../ComponentsMixins"
import type { LibAllColors, LibColorsHover, CssTextAlign } from "../../types"

interface ILibTextStyle {
    $color?: LibAllColors
    $textAlign?: CssTextAlign
    $linkColor: LibColorsHover
}

interface ILibTextStyleHeading extends ILibTextStyle {
    $display?: boolean
}

const TextCommon = ($linkColor: LibColorsHover) => css`
    a,
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        text-decoration: none;
        font-size: inherit;
        font-weight: ${FONT_WEIGHTS.BLACK};
        transition: ${TRANSITIONS.SHORT};
        color: ${({ theme }) => Mixins.ColorsHoverDefault($linkColor, theme)};

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
`

const StyledH1 = styled.h1<ILibTextStyleHeading>`
    ${({ $textAlign, $color, $display }) =>
        TextBaseMixin({
            $fontSize: $display ? "display-h1" : "h1",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledH2 = styled.h2<ILibTextStyleHeading>`
    ${({ $textAlign, $color, $display }) =>
        TextBaseMixin({
            $fontSize: $display ? "display-h2" : "h2",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledH3 = styled.h3<ILibTextStyleHeading>`
    ${({ $textAlign, $color, $display }) =>
        TextBaseMixin({
            $fontSize: $display ? "display-h3" : "h3",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledH4 = styled.h4<ILibTextStyleHeading>`
    ${({ $textAlign, $color, $display }) =>
        TextBaseMixin({
            $fontSize: $display ? "display-h4" : "h4",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledH5 = styled.h5<ILibTextStyleHeading>`
    ${({ $textAlign, $color, $display }) =>
        TextBaseMixin({
            $fontSize: $display ? "display-h5" : "h5",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledH6 = styled.h6<ILibTextStyle>`
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "h6",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledP = styled.p<ILibTextStyle>`
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "body",
            $fontWeight: "regular",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledStrong = styled.strong<ILibTextStyle>`
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "inherit",
            $fontWeight: "black",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledEm = styled.em<ILibTextStyle>`
    font-style: italic;
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "inherit",
            $fontWeight: "regular",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledSmall = styled.small<ILibTextStyle>`
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "small",
            $fontWeight: "regular",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledBlockquote = styled.blockquote<ILibTextStyle>`
    font-style: italic;
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "h6",
            $fontWeight: "bold",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const ListStyles = css`
    padding-left: ${SPACERS.S};
    ${Mixins.Flexbox({
        $gap: "xxs",
        $flexDirection: "column",
        $alignItems: "stretch",
    })};

    li {
        padding-inline-start: ${SPACERS.XXS};
    }
`

const StyledUl = styled.ul<ILibTextStyle>`
    ${ListStyles};
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "body",
            $fontWeight: "regular",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledOl = styled.ol<ILibTextStyle>`
    ${ListStyles};
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "body",
            $fontWeight: "regular",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}
`

const StyledDl = styled.dl<ILibTextStyle>`
    ${({ $textAlign, $color }) =>
        TextBaseMixin({
            $fontSize: "body",
            $fontWeight: "regular",
            $textAlign,
            $color,
        })}
    ${({ $linkColor }) => TextCommon($linkColor)}

    dt {
        font-weight: ${FONT_WEIGHTS.BLACK};
        font-size: ${FONT_SIZES.H6};
    }

    dd {
        padding-inline-start: ${SPACERS.M};

        &:not(:last-of-type) {
            margin-bottom: ${SPACERS.XS};
        }
    }
`

setDefaultTheme([
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
    StyledH6,
    StyledP,
    StyledStrong,
    StyledEm,
    StyledSmall,
    StyledBlockquote,
    StyledUl,
    StyledOl,
    StyledDl,
])

export {
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
    StyledH6,
    StyledP,
    StyledStrong,
    StyledEm,
    StyledSmall,
    StyledBlockquote,
    StyledUl,
    StyledOl,
    StyledDl,
}
