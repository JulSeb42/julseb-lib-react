/*=============================================== GridItem ===============================================*/

import styled from "styled-components"
import { Text, RADIUSES, SPACERS } from "../lib"

interface GridItemProps {
    children?: string
}

export const GridItem = ({ children = "Grid item" }: GridItemProps) => {
    return <StyledText>{children}</StyledText>
}

const StyledText = styled(Text)`
    background-color: ${({ theme }) => theme.PRIMARY_500};
    border-radius: ${RADIUSES.M};
    color: ${({ theme }) => theme.BACKGROUND};
    padding: ${SPACERS.S};
`
