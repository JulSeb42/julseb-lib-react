import styled from "styled-components"
import { Mixins, setDefaultTheme } from "../../"
import type { LibSpacers } from "../../types"

const StyledSticky = styled.div<{ $top: LibSpacers }>`
    position: -webkit-sticky;
    position: sticky;
    top: ${({ $top }) => Mixins.Spacer($top)};
`

setDefaultTheme([StyledSticky])

export { StyledSticky }
