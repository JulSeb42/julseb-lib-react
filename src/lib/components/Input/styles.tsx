import styled, { css } from "styled-components"
import { SPACERS, setDefaultTheme, FONT_SIZES, LINE_HEIGHTS } from "../.."
import { InputBaseMixin } from "../ComponentsMixins"
import type { ILibInputStyle } from "./subtypes"

const TEXTAREA_MIN_HEIGHT = `calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY} * 4 + ${SPACERS.XXS} * 2)`

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
            min-height: ${TEXTAREA_MIN_HEIGHT};
            resize: vertical;
            padding: ${SPACERS.XS};
        `}
`

setDefaultTheme([StyledInput])

export { StyledInput }
