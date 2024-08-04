/*=============================================== InputPhone styles ===============================================*/

import styled, { css } from "styled-components"
import {
    FONT_FAMILIES,
    FONT_SIZES,
    Mixins,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
    COLORS_LIGHT,
    COLORS_DARK,
} from "../../"
import type { LibInputBackground, LibValidationStatus } from "../../types"
import { InputBaseMixin, type ILibInputBaseMixin } from "../ComponentsMixins"

const StyledInputPhone = styled.input<ILibInputBaseMixin>`
    ${InputBaseMixin}
    padding-left: 0;
`

const CountryButton = styled.button<{
    $validation: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
}>`
    height: 100%;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.FONT};
    width: 32px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xxs",
    })}

    &:disabled {
        color: ${({ theme }) => theme.GRAY_500};
    }

    ${({ $inputBackground }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${COLORS_LIGHT.FONT};

                    &:disabled {
                        color: ${COLORS_LIGHT.GRAY_500};
                    }
                `
            case "dark":
                return css`
                    color: ${COLORS_DARK.FONT};

                    &:disabled {
                        color: ${COLORS_DARK.GRAY_500};
                    }
                `
            default:
                return null
        }
    }}
`

const Flag = styled.img`
    width: 16px;
    object-fit: contain;
`

const CountryCode = styled.span<{
    $inputBackground: LibInputBackground | undefined
    $disabled: boolean | undefined
}>`
    height: 100%;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
    color: ${({ theme }) => theme.FONT};
    ${Mixins.Flexbox({
        $alignItems: "center",
    })}

    ${({ $disabled, theme }) =>
        $disabled &&
        css`
            color: ${theme.GRAY_500};
        `}

    ${({ $inputBackground, $disabled }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${$disabled
                        ? COLORS_LIGHT.GRAY_500
                        : COLORS_LIGHT.FONT};
                `
            case "dark":
                return css`
                    color: ${$disabled
                        ? COLORS_DARK.GRAY_500
                        : COLORS_DARK.FONT};
                `
            default:
                return null
        }
    }}
`

const SearchContainer = styled.div<{
    $validation: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
}>`
    color: ${({ theme, $validation }) =>
        $validation === false ? theme.DANGER_500 : theme.PRIMARY_500};
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_200};
    width: 100%;
    padding-bottom: ${SPACERS.XS};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}

    &:has(input:focus) {
        border-bottom-color: ${({ theme, $validation }) =>
            $validation === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    ${({ $inputBackground, $validation }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${$validation === false
                        ? COLORS_LIGHT.DANGER_500
                        : COLORS_LIGHT.PRIMARY_500};
                    border-color: ${COLORS_LIGHT.GRAY_200};

                    &:has(input:focus) {
                        border-bottom-color: ${$validation === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                    }
                `
            case "dark":
                return css`
                    color: ${$validation === false
                        ? COLORS_DARK.DANGER_500
                        : COLORS_DARK.PRIMARY_500};
                    border-color: ${COLORS_DARK.GRAY_200};

                    &:has(input:focus) {
                        border-bottom-color: ${$validation === false
                            ? COLORS_DARK.DANGER_500
                            : COLORS_DARK.PRIMARY_500};
                    }
                `
            default:
                return null
        }
    }}
`

const SearchInput = styled.input<{
    $validation: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
}>`
    border: none;
    padding: 0;
    font-family: ${FONT_FAMILIES.BODY};
    font-size: ${FONT_SIZES.BODY};
    color: ${({ theme }) => theme.FONT};
    outline: none;
    width: 100%;
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.GRAY_400};
    }

    ${({ $inputBackground }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${COLORS_LIGHT.FONT};

                    &::placeholder {
                        color: ${COLORS_LIGHT.GRAY_400};
                    }
                `
            case "dark":
                return css`
                    color: ${COLORS_DARK.FONT};

                    &::placeholder {
                        color: ${COLORS_DARK.GRAY_400};
                    }
                `
            default:
                return null
        }
    }}
`

setDefaultTheme([
    StyledInputPhone,
    CountryButton,
    SearchContainer,
    SearchInput,
    Flag,
    CountryCode,
])

export {
    StyledInputPhone,
    CountryButton,
    SearchContainer,
    SearchInput,
    Flag,
    CountryCode,
}
