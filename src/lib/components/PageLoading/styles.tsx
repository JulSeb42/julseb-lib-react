import styled from "styled-components"
import { setDefaultTheme, Mixins } from "../../"
import type { LibAllColors } from "../../types"

const StyledPageLoading = styled.div<{ $backgroundColor: LibAllColors }>`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

setDefaultTheme([StyledPageLoading])

export { StyledPageLoading }
