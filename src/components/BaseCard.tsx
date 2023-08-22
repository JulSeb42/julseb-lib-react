/*=============================================== BaseCard ===============================================*/

import styled from "styled-components"

import { Mixins, RADIUSES, SPACERS, setDefaultTheme } from "../lib"

const BaseCard = styled.div`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    overflow: hidden;
    padding: ${SPACERS.S};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "s",
    })};
`

setDefaultTheme([BaseCard])

export { BaseCard }
