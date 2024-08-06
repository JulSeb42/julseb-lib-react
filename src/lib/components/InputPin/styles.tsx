/*=============================================== InputPin styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    RADIUSES,
    TRANSITIONS,
    Mixins,
    COLORS_LIGHT,
    COLORS_DARK,
} from "../../"
import { InputBaseMixin } from "../ComponentsMixins"
import type { IStyledInputPin } from "./subtypes"

const StyledInputPin = styled.input<IStyledInputPin>`
    ${InputBaseMixin}
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.S};
    width: ${({ $inputSize }) => $inputSize}px;
    height: ${({ $inputSize }) => $inputSize}px;
    display: block;
    flex-grow: unset;
    text-align: center;
    transition: ${TRANSITIONS.SHORT};
    font-size: ${({ $fontSize }) => Mixins.FontSize($fontSize)};
    background-color: ${({ $validation, theme }) =>
        $validation === false ? theme.DANGER_50 : theme.BACKGROUND};

    &:focus {
        border-color: ${({ theme, $validation }) =>
            $validation === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    ${({ $inputBackground, $validation }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    background-color: ${$validation === false
                        ? COLORS_LIGHT.DANGER_50
                        : COLORS_LIGHT.BACKGROUND};
                    border-color: ${COLORS_LIGHT.GRAY_200};

                    &:focus {
                        border-color: ${$validation === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                    }
                `
            case "dark":
                return css`
                    background-color: ${$validation === false
                        ? COLORS_DARK.DANGER_50
                        : COLORS_DARK.BACKGROUND};
                    border-color: ${COLORS_DARK.GRAY_200};

                    &:focus {
                        border-color: ${$validation === false
                            ? COLORS_DARK.DANGER_500
                            : COLORS_DARK.PRIMARY_500};
                    }
                `
            default:
                return null
        }
    }}
`

setDefaultTheme([StyledInputPin])

export { StyledInputPin }
