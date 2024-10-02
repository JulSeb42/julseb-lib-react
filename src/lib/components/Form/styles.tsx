/*=============================================== Form styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { Mixins, setDefaultTheme } from "../../"
import type { LibSpacers } from "../../types"

const StyledForm = styled.form<{
    $gap?: LibSpacers
    $maxWidth: string | number
}>`
    max-width: ${({ $maxWidth }) => stringifyPx($maxWidth)};
    width: 100%;
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })}
`

setDefaultTheme([StyledForm])

export { StyledForm }
