/*=============================================== MainDemo ===============================================*/

import styled from "styled-components"
import { LAYOUTS, Mixins, SPACERS } from "../../lib"

export const MainDemo = styled.main`
    width: 100%;
    max-width: ${LAYOUTS.MAIN_LARGE};
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "flex-start",
        $gap: "l",
    })}
    ${Mixins.StretchTags};
`
