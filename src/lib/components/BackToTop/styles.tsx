/*=============================================== BackToTop styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, ButtonIcon, SPACERS, TRANSITIONS } from "../../"

const StyledBackToTop = styled(ButtonIcon)`
    position: fixed;
    bottom: ${SPACERS.XL};
    right: ${SPACERS.XL};
    opacity: 0;
    visibility: hidden;
    transition: ${TRANSITIONS.SHORT};

    &.Visible {
        opacity: 1;
        visibility: visible;
    }
`

setDefaultTheme([StyledBackToTop])

export { StyledBackToTop }
