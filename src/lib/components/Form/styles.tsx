/*=============================================== Form styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { Mixins, setDefaultTheme } from "../../"
import type { LibSpacers } from "../../types"

const StyledForm = styled.form<{
    $gap?: LibSpacers
    $maxWidth: string | number
}>`
    max-width: ${({ $maxWidth }) => stringifyPx($maxWidth)};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })}
`

setDefaultTheme([StyledForm])

export { StyledForm }
