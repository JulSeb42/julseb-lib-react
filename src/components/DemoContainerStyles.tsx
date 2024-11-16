/*=============================================== DemoContainerStyles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme, Wrapper, Main, Aside } from "../lib"

const StyledWrapper = styled(Wrapper)`
    background-color: ${({ theme }) => theme.WARNING_100};
`

const StyledMain = styled(Main)`
    background-color: ${({ theme }) => theme.DANGER_100};
` as typeof Main

const StyledAside = styled(Aside)`
    background-color: ${({ theme }) => theme.DANGER_100};
`
setDefaultTheme([StyledWrapper, StyledMain, StyledAside])

export { StyledWrapper, StyledMain, StyledAside }
