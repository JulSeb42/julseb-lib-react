/*=============================================== Section styles ===============================================*/

import styled from "styled-components"

import { setDefaultTheme, Mixins } from "../../"
import type { LibSpacers } from "../../types"

const StyledSection = styled.section<{ $gap?: LibSpacers }>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "flex-start",
            $gap,
        })}

    ${Mixins.StretchTags}
    
    & > * {
        flex-shrink: 0;
    }
`

setDefaultTheme([StyledSection])

export { StyledSection }
