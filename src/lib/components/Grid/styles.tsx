/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, Mixins } from "../../"
import type {
    AlignContent,
    AlignItems,
    JustifyContent,
    JustifyItems,
    LibSpacers,
} from "../../types"

const StyledGrid = styled.div<{
    $inline?: boolean
    $col?: number | string
    $gap?: LibSpacers
    $columnGap?: LibSpacers
    $rowGap?: LibSpacers
    $justifyItems?: JustifyItems
    $alignItems?: AlignItems
    $justifyContent?: JustifyContent
    $alignContent?: AlignContent
}>`
    ${Mixins.Grid}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
