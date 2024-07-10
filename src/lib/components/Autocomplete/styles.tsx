/*=============================================== Autocomplete styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme } from "../../"
import { InputBaseMixin, type InputBaseMixinProps } from "../ComponentsMixins"

const StyledAutocomplete = styled.input<InputBaseMixinProps>`
    ${InputBaseMixin}
`

setDefaultTheme([StyledAutocomplete])

export { StyledAutocomplete }
