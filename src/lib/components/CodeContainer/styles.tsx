/*=============================================== CodeContainer styles ===============================================*/

import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import {
    setDefaultTheme,
    ButtonIcon,
    Mixins,
    COLORS_LIGHT,
    SPACERS,
    FONT_FAMILIES,
    LINE_HEIGHTS,
    FONT_SIZES,
} from "../../"
import type { LibAllColors } from "../../types"

const StyledCodeContainer = styled.div<{ $color?: LibAllColors }>`
    position: relative;
    padding: ${SPACERS.M};
    background-color: ${COLORS_LIGHT.GRAY_800};
    color: ${({ $color, theme }) => $color && Mixins.AllColors($color, theme)};
    ${Mixins.HideScrollbar}
    tab-size: 4;

    & > code {
        color: ${({ $color, theme }) =>
            $color && Mixins.AllColors($color, theme)};
    }
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)<{
    $color?: LibAllColors
}>`
    background-color: transparent !important;
    font-family: ${FONT_FAMILIES.CODE};
    font-size: ${FONT_SIZES.SMALL};
    padding: 0 !important;
    white-space: pre;
    line-height: ${LINE_HEIGHTS.CODE};
    overflow-x: scroll !important;
    color: ${({ $color, theme }) => $color && Mixins.AllColors($color, theme)};
    ${Mixins.HideScrollbar}

    & > code {
        background-color: transparent !important;
        line-height: ${LINE_HEIGHTS.CODE};
        max-width: 100% !important;
        color: ${({ $color, theme }) =>
            $color && Mixins.AllColors($color, theme)};
    }
`

const StyledButtonIcon = styled(ButtonIcon)`
    position: absolute;
    top: ${SPACERS.S};
    right: ${SPACERS.M};
`

setDefaultTheme([
    StyledCodeContainer,
    StyledSyntaxHighlighter,
    StyledButtonIcon,
])

export { StyledCodeContainer, StyledSyntaxHighlighter, StyledButtonIcon }
