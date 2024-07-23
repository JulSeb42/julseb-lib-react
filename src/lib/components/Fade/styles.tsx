/*=============================================== Fade styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, SPACERS } from "../../"

const StyledFade = styled.div<{ $isVisible: boolean }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) =>
        $isVisible
            ? " transform: translateX(0)"
            : `translateX(calc(${SPACERS.S} * -1))`};
    transition: opacity 0.4s ease-out, transform 0.8s ease-out;
`

setDefaultTheme([StyledFade])

export { StyledFade }
