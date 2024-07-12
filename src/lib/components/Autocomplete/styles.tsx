/*=============================================== Autocomplete styles ===============================================*/

import styled from "styled-components"
import { setDefaultTheme } from "../../"
import { InputBaseMixin, type ILibInputBaseMixin } from "../ComponentsMixins"

const StyledAutocomplete = styled.input<ILibInputBaseMixin>`
    ${InputBaseMixin}
`

setDefaultTheme([StyledAutocomplete])

export { StyledAutocomplete }
