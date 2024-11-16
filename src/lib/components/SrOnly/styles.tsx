/*=============================================== SrOnly styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme } from "../../"

const StyledSrOnly = styled.div`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
`

setDefaultTheme([StyledSrOnly])

export { StyledSrOnly }
