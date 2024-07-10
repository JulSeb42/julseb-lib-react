/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"
import { BREAKPOINTS, Mixins, setDefaultTheme } from "../../"
import type { LibSpacers } from "../../types"

const StyledWrapper = styled.div<{ $gap: LibSpacers }>`
    position: relative;
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $justifyContent: "center",
        })}

    @media ${BREAKPOINTS.TABLET_LARGE} {
        flex-direction: column;
        align-items: center;
        min-height: inherit;
    }
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
