/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"
import { BREAKPOINTS, Mixins, setDefaultTheme } from "../../"

const StyledWrapper = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        $gap: "l",
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
