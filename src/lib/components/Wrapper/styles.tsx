/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"
import { MEDIA, Mixins, setDefaultTheme } from "../../"
import type { LibAllColors, LibSpacers } from "../../types"

const StyledWrapper = styled.div<{
    $gap: LibSpacers
    $backgroundColor: LibAllColors
}>`
    position: relative;
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $justifyContent: "center",
        })}

    @media ${MEDIA.BREAKPOINT_TABLET_LARGE} {
        flex-direction: column;
        align-items: center;
        min-height: inherit;
    }
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
