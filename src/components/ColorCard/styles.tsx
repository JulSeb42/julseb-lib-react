/*=============================================== ColorCard styles ===============================================*/

import styled from "styled-components"
import { Mixins, SPACERS, setDefaultTheme } from "../../lib"
import { BaseCard } from "../BaseCard"

const StyledColorCard = styled(BaseCard)``

const SQUARE_SIZE = 120

const Square = styled.span<{ $background: string }>`
    width: ${SQUARE_SIZE}px;
    height: ${SQUARE_SIZE}px;
    background: ${({ $background }) => $background};
    display: block;
`

const CardContent = styled.div`
    width: calc(100% - ${SQUARE_SIZE}px - ${SPACERS.S});
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}
`

setDefaultTheme([StyledColorCard, Square, CardContent])

export { StyledColorCard, Square, CardContent }
