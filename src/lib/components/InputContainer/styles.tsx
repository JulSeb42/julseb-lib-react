import type { FC } from "react"
import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import {
    setDefaultTheme,
    Mixins,
    Text,
    FONT_SIZES,
    FONT_WEIGHTS,
    LINE_HEIGHTS,
    SPACERS,
} from "../../"
import type { CssFontStyle } from "../../types"

const StyledInputContainer = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "xxs",
    })}

    &.Open {
        z-index: 20;
    }
`

const Label = styled.label`
    color: ${({ theme }) => theme.PRIMARY_500};
    font-weight: ${FONT_WEIGHTS.BLACK};
`

const LabelComment = styled.span`
    font-size: ${FONT_SIZES.SMALL};
    color: ${({ theme }) => theme.GRAY_500};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    font-style: italic;
    line-height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
`

const HelperBottomContainer = styled.div`
    ${Mixins.Flexbox({
        $gap: "xxs",
    })}
`

const HelperBottomIconContainer = styled.span<{ $iconSize: number }>`
    height: calc(${FONT_SIZES.SMALL} * ${LINE_HEIGHTS.BODY});
    width: ${({ $iconSize }) => stringifyPx($iconSize)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

const StyledHelperBottom = styled(Text).attrs({ tag: "small" })<{
    $fontStyle?: CssFontStyle
    $hasIcon?: boolean
    $iconSize?: number
}>`
    font-style: ${({ $fontStyle }) => $fontStyle};
    width: ${({ $hasIcon, $iconSize }) =>
        $hasIcon &&
        $iconSize &&
        `calc(100% - ${stringifyPx($iconSize)} - ${SPACERS.XXS})`};
` as FC<any>

setDefaultTheme([
    StyledInputContainer,
    Label,
    LabelComment,
    HelperBottomContainer,
    HelperBottomIconContainer,
    StyledHelperBottom,
])

export {
    StyledInputContainer,
    Label,
    LabelComment,
    HelperBottomContainer,
    HelperBottomIconContainer,
    StyledHelperBottom,
}
