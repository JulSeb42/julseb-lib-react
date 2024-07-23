/*=============================================== BackToTop styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, ButtonIcon, SPACERS, TRANSITIONS } from "../../"
import type {} from "../../types"
import type {} from "./types"

const StyledBackToTop = styled(ButtonIcon)<{ $isVisible: boolean }>`
    position: fixed;
    bottom: ${SPACERS.XL};
    right: ${SPACERS.XL};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    transition: ${TRANSITIONS.SHORT};
`

setDefaultTheme([StyledBackToTop])

export { StyledBackToTop }
