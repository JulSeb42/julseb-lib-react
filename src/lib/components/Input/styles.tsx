/*=============================================== Input styles ===============================================*/

import styled, { css } from "styled-components"
import { SPACERS, setDefaultTheme, FONT_SIZES, LINE_HEIGHTS } from "../.."
import type { LibInputVariant, LibInputBackground } from "../../types"
import { InputBaseMixin, type ILibInputBaseMixin } from "../ComponentsMixins"

const TEXTAREA_MIN_HEIGHT = `calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY} * 4 + ${SPACERS.XXS} * 2)`

interface ILibInputStyle extends ILibInputBaseMixin {
    $inputVariant: LibInputVariant | undefined
    $inputBackground: LibInputBackground | undefined
    $isSelect?: boolean
    $isTextarea?: boolean
}

const StyledInput = styled.input<ILibInputStyle>`
    ${InputBaseMixin}

    ${({ $isSelect }) =>
        $isSelect &&
        css`
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }

            &:disabled {
                cursor: not-allowed;
            }
        `}

    ${({ $isTextarea }) =>
        $isTextarea &&
        css`
            height: inherit;
            min-height: ${TEXTAREA_MIN_HEIGHT};
            resize: vertical;
            padding: 0 ${SPACERS.XS};
        `}
`

setDefaultTheme([StyledInput])

export { StyledInput }
