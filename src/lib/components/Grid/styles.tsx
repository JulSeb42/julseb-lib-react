/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, Mixins } from "../../"
import type {
    CssAlignContent,
    CssAlignItems,
    CssJustifyContent,
    CssJustifyItems,
    LibSpacers,
} from "../../types"

const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: number | string
    $gap?: LibSpacers
    $columnGap?: LibSpacers
    $rowGap?: LibSpacers
    $justifyItems?: CssJustifyItems
    $alignItems?: CssAlignItems
    $justifyContent?: CssJustifyContent
    $alignContent?: CssAlignContent
}>`
    ${Mixins.Grid}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
