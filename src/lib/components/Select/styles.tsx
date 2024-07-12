/*=============================================== Select styles ===============================================*/

import styled from "styled-components"
import { FONT_WEIGHTS, setDefaultTheme } from "../../"
import { InputBaseMixin, type ILibInputBaseMixin } from "../ComponentsMixins"

const SelectContainer = styled.div`
    position: relative;
    width: 100%;
`

interface SelectButtonProps extends ILibInputBaseMixin {
    $hasOptions: boolean
}

const StyledSelectButton = styled.button<SelectButtonProps>`
    ${InputBaseMixin}
    text-align: left;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    cursor: ${({ $hasOptions }) => ($hasOptions ? "pointer" : "default")};
`

setDefaultTheme([SelectContainer, StyledSelectButton])

export { SelectContainer, StyledSelectButton }
