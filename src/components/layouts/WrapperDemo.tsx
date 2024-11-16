/*=============================================== WrapperDemo ===============================================*/

import styled from "styled-components"
import { NAV_WIDTH } from "../NavDemo/styles"
import { Mixins } from "../../lib"

export const WrapperDemo = styled.div`
    width: calc(100% - ${NAV_WIDTH}px);
    position: relative;
    left: ${NAV_WIDTH}px;
    ${Mixins.Flexbox({
        $justifyContent: "center",
    })}
`
