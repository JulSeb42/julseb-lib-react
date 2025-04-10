import styled from "styled-components"
import { setDefaultTheme, Mixins } from "../../"
import type {
    CssAlignContent,
    CssAlignItems,
    CssJustifyContent,
    CssJustifyItems,
    ILibPadding,
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
    $padding?: ILibPadding
}>`
    ${Mixins.Grid}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
