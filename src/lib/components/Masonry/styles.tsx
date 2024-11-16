/*=============================================== Masonry styles ===============================================*/

import styled, { css } from "styled-components"
import { Mixins, setDefaultTheme } from "../../"
import type { LibSpacers } from "../../types"

const Common = ({ $gap }: { $gap?: LibSpacers }) => css`
    display: grid;
    grid-gap: ${Mixins.Spacer($gap)};
`

const StyledMasonry = styled.div<{ $gap?: LibSpacers }>`
    ${Common};
    grid-auto-flow: column;
`

const Col = styled.div<{ $gap?: LibSpacers }>`
    ${Common};
    height: fit-content;
`

setDefaultTheme([StyledMasonry, Col])

export { StyledMasonry, Col }
