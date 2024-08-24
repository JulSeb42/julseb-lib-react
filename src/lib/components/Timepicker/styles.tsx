/*=============================================== Timepicker styles ===============================================*/

import styled from "styled-components"
import { FONT_WEIGHTS, Mixins, setDefaultTheme } from "../../"
import type {
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
} from "../../types"
import { InputBaseMixin } from "../ComponentsMixins"
import type {} from "./types"

const InputTime = styled.input<{
    $inputVariant: LibInputVariant | undefined
    $inputBackground: LibInputBackground | undefined
    $validationStatus: LibValidationStatus | undefined
    $disabled: boolean | undefined
}>`
    font-weight: ${FONT_WEIGHTS.REGULAR};
    cursor: pointer;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    ${InputBaseMixin};

    &:disabled {
        cursor: not-allowed;
    }
`

setDefaultTheme([InputTime])

export { InputTime }
