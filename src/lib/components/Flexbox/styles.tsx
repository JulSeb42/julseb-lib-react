/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { Mixins, setDefaultTheme } from "../../"
import type {
    AlignContent,
    AlignItems,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    JustifyItems,
    LibSpacers,
} from "../../types"

const StyledFlexbox = styled.div<{
    $inline?: boolean
    $flexDirection?: FlexDirection
    $flexWrap?: FlexWrap
    $justifyContent?: JustifyContent
    $alignItems?: AlignItems
    $justifyItems?: JustifyItems
    $alignContent?: AlignContent
    $gap?: LibSpacers
    $columnGap?: LibSpacers
    $rowGap?: LibSpacers
}>`
    ${Mixins.Flexbox}
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
