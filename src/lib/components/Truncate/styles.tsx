/*=============================================== Truncate styles ===============================================*/

import styled from "styled-components"
import { FONT_WEIGHTS, Mixins, setDefaultTheme, Tag } from "../../"
import type { LibSpacers } from "../../types"

const StyledTruncate = styled.div<{ $gap?: LibSpacers }>`
    overflow: hidden;
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "row",
            $alignItems: "center",
            $justifyContent: "flex-start",
            $gap,
            $flexWrap: "nowrap",
        })}
`

const StyledTag = styled(Tag).attrs({
    backgroundColor: "transparent",
    textColor: "font",
    padding: "0px",
})`
    margin-left: auto;
    font-weight: ${FONT_WEIGHTS.BLACK};
    white-space: nowrap;
    display: block !important;

    &[hidden] {
        display: block !important;
    }
`

setDefaultTheme([StyledTruncate, StyledTag])

export { StyledTruncate, StyledTag }
