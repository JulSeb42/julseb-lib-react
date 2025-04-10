import styled from "styled-components"
import { Mixins, setDefaultTheme } from "../../"
import type {
    CssAlignContent,
    CssAlignItems,
    CssFlexDirection,
    CssFlexWrap,
    CssJustifyContent,
    CssJustifyItems,
    ILibPadding,
    LibSpacers,
} from "../../types"

const StyledFlexbox = styled.div<{
    $inline?: boolean
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
}>`
    ${Mixins.Flexbox}
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
