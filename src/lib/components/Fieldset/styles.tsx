/*=============================================== Fieldset styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, Mixins, SPACERS, FONT_WEIGHTS } from "../../"
import type {
    CssAlignContent,
    CssAlignItems,
    CssFlexDirection,
    CssFlexWrap,
    CssJustifyContent,
    CssJustifyItems,
    ILibBorder,
    ILibPadding,
    ILibRadius,
    LibSpacers,
    LibValidationStatus,
} from "../../types"

const StyledFieldset = styled.fieldset<{
    $flexDirection?: CssFlexDirection
    $flexWrap?: CssFlexWrap
    $justifyContent?: CssJustifyContent
    $alignItems?: CssAlignItems
    $justifyItems?: CssJustifyItems
    $alignContent?: CssAlignContent
    $gap?: LibSpacers
    $columnGap?: LibSpacers
    $rowGap?: LibSpacers
    $padding?: ILibPadding
    $border?: ILibBorder
    $borderRadius?: ILibRadius
    $validationStatus: LibValidationStatus | undefined
}>`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    ${Mixins.Flexbox}
    ${({ $border, $validationStatus }) =>
        Mixins.Border(
            $validationStatus === false ? { color: "danger" } : $border
        )};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
`

const Legend = styled.legend`
    padding: 0 ${SPACERS.S};
    font-weight: ${FONT_WEIGHTS.BLACK};
`

setDefaultTheme([StyledFieldset, Legend])

export { StyledFieldset, Legend }
