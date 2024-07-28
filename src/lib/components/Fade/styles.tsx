/*=============================================== Fade styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, SPACERS } from "../../"

const StyledFade = styled.div`
    opacity: 0;
    transform: translateX(calc(${SPACERS.S} * -1));
    transition: opacity 0.4s ease-out, transform 0.8s ease-out;

    &.Visible {
        transform: translateX(0);
        opacity: 1;
    }
`

setDefaultTheme([StyledFade])

export { StyledFade }
