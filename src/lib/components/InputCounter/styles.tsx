/*=============================================== InputCounter styles ===============================================*/

import styled from "styled-components"
import {
    FONT_SIZES,
    FONT_WEIGHTS,
    Mixins,
    SPACERS,
    setDefaultTheme,
} from "../../"
import { InputBaseMixin, type InputBaseMixinProps } from "../ComponentsMixins"

interface InputProps extends InputBaseMixinProps {
    $length: number
}

const InputCounterWrapper = styled.div<{
    $isInputEditable: boolean | undefined
}>`
    ${({ $isInputEditable }) =>
        Mixins.Flexbox({
            $gap: $isInputEditable ? "xs" : "s",
            $alignItems: "center",
        })}
`

const Input = styled.input<InputProps>`
    ${InputBaseMixin}
    width: ${({ $length }) =>
        $length > 3 ? `calc(48px + ${$length} * ${SPACERS.XS})` : "48px"};
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const NumberValue = styled.span<{ $disabled: boolean | undefined }>`
    font-size: ${FONT_SIZES.H4};
    font-weight: ${FONT_WEIGHTS.BLACK};
    color: ${({ $disabled, theme }) =>
        $disabled ? theme.GRAY_500 : theme.FONT};
`

setDefaultTheme([InputCounterWrapper, Input, NumberValue])

export { InputCounterWrapper, Input, NumberValue }
