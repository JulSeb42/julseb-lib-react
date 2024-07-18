/*=============================================== ComponentsMixins ===============================================*/

import { css } from "styled-components"
import {
    BREAKPOINTS,
    FONT_FAMILIES,
    FONT_WEIGHTS,
    INPUT_HEIGHT,
    LINE_HEIGHTS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    COLORS_LIGHT,
    COLORS_DARK,
    FONT_SIZES,
} from "../../"
import type {
    LibButtonVariant,
    LibAllColors,
    ILibBoxShadow,
    LibColorsHover,
    LibFontSizes,
    LibFontWeights,
    LibInputBackground,
    LibInputVariant,
    ILibRadius,
    LibValidationStatus,
    CssTextAlign,
} from "../../types"

export interface ILibButtonMixin {
    $color: LibColorsHover
    $shadow?: ILibBoxShadow
    $borderRadius?: ILibRadius
    $variant?: LibButtonVariant
}

export const ButtonMixin = ({
    $color,
    $shadow,
    $borderRadius,
    $variant,
}: ILibButtonMixin) => css`
    border: 1px solid transparent;
    text-decoration: none;
    background-color: transparent;
    line-height: 100%;
    ${Mixins.BorderRadius($borderRadius)}
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
    ${Mixins.BoxShadow($shadow)}

    ${({ theme }) =>
        $variant === "plain"
            ? css`
                  background-color: ${Mixins.ColorsHoverDefault($color, theme)};
                  color: ${$color === "white"
                      ? theme.PRIMARY_500
                      : $color === "background"
                      ? theme.FONT
                      : theme.BACKGROUND};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          background-color: ${Mixins.ColorsHoverHover(
                              $color,
                              theme
                          )};
                      }

                      &:not(:disabled):active {
                          background-color: ${Mixins.ColorsHoverActive(
                              $color,
                              theme
                          )};
                      }

                      &:disabled {
                          background-color: ${theme.GRAY_100};
                          color: ${theme.GRAY_500};
                      }
                  }
              `
            : $variant === "outline"
            ? css`
                  border-color: ${Mixins.ColorsHoverDefault($color, theme)};
                  color: ${Mixins.ColorsHoverDefault($color, theme)};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          border-color: ${Mixins.ColorsHoverHover(
                              $color,
                              theme
                          )};
                          color: ${Mixins.ColorsHoverHover($color, theme)};
                      }

                      &:not(:disabled):active {
                          border-color: ${Mixins.ColorsHoverActive(
                              $color,
                              theme
                          )};
                          color: ${Mixins.ColorsHoverActive($color, theme)};
                      }

                      &:disabled {
                          border-color: ${theme.GRAY_500};
                          color: ${theme.GRAY_500};
                      }
                  }
              `
            : $variant === "ghost"
            ? css`
                  background-color: ${Mixins.ColorsGhostDefault($color, theme)};
                  color: ${$color === "white" || $color === "background"
                      ? theme.PRIMARY_500
                      : $color === "font"
                      ? theme.BACKGROUND
                      : Mixins.ColorsHoverDefault($color, theme)};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          background-color: ${Mixins.ColorsGhostHover(
                              $color,
                              theme
                          )};
                      }

                      &:not(:disabled):active {
                          background-color: ${Mixins.ColorsGhostActive(
                              $color,
                              theme
                          )};
                      }

                      &:disabled {
                          background-color: ${theme.GRAY_50};
                          color: ${theme.GRAY_500};
                      }
                  }
              `
            : $variant === "transparent" &&
              css`
                  color: ${Mixins.ColorsHoverDefault($color, theme)};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          color: ${Mixins.ColorsHoverHover($color, theme)};
                      }

                      &:not(:disabled):active {
                          color: ${Mixins.ColorsHoverActive($color, theme)};
                      }

                      &:disabled {
                          color: ${theme.GRAY_500};
                      }
                  }
              `}
`

export interface ILibTextBaseMixin {
    $fontSize: LibFontSizes | "inherit"
    $fontWeight: LibFontWeights
    $textAlign?: CssTextAlign
    $color?: LibAllColors
    $linkColor?: LibColorsHover
}

export const TextBaseMixin = ({
    $fontSize,
    $fontWeight,
    $textAlign,
    $color = "currentColor",
    $linkColor = "primary",
}: ILibTextBaseMixin) => css`
    font-family: ${FONT_FAMILIES.BODY};
    font-size: ${Mixins.FontSize($fontSize)};
    font-weight: ${Mixins.FontWeight($fontWeight)};
    text-align: ${$textAlign};
    color: ${({ theme }) => Mixins.AllColors($color, theme)};
    line-height: ${LINE_HEIGHTS.BODY};

    & > * {
        font-size: inherit;
    }

    a,
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        text-decoration: none;
        font-size: inherit;
        font-weight: ${FONT_WEIGHTS.BLACK};
        transition: ${TRANSITIONS.SHORT};
        color: ${({ theme }) => Mixins.ColorsHoverDefault($linkColor, theme)};

        @media ${BREAKPOINTS.HOVER} {
            &:hover {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverHover($linkColor, theme)};
            }

            &:active {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverActive($linkColor, theme)};
            }
        }
    }

    code {
        font-family: ${FONT_FAMILIES.CODE};
        line-height: ${LINE_HEIGHTS.CODE};
        color: ${({ theme }) => theme.PRIMARY_500};
        padding: ${SPACERS.XXS};
        background-color: ${({ theme }) => theme.GRAY_50};
        border-radius: ${RADIUSES.S};
        font-size: inherit;
    }
`

export interface ILibInputBaseMixin {
    $validation: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
    $disabled: boolean | undefined
    $hasIcon: boolean | undefined
    $inputVariant: LibInputVariant | undefined
    $hasListOpen?: boolean
}

export const InputBaseMixin = ({
    $hasIcon,
    $disabled,
    $inputBackground,
    $inputVariant,
    $validation,
    $hasListOpen,
}: ILibInputBaseMixin) => css`
    width: 100%;
    height: ${INPUT_HEIGHT}px;
    line-height: ${INPUT_HEIGHT}px;
    position: relative;
    z-index: 1;
    outline: none;
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    font-family: ${FONT_FAMILIES.BODY};
    font-size: ${FONT_SIZES.BODY};
    box-sizing: border-box;
    transition: ${TRANSITIONS.SHORT};
    background-color: ${({ theme }) =>
        $validation === false
            ? theme.DANGER_50
            : $disabled
            ? theme.GRAY_100
            : theme.BACKGROUND};
    border-radius: ${$inputVariant === "pill" ? RADIUSES.ROUND : RADIUSES.S};
    padding: 0 ${$inputVariant === "pill" ? SPACERS.S : SPACERS.XS};
    padding-left: ${$hasIcon &&
    ($inputVariant === "pill"
        ? `calc(${INPUT_HEIGHT}px + ${SPACERS.XS} + ${SPACERS.XS})`
        : `calc(${INPUT_HEIGHT}px + ${SPACERS.XS})`)};
    color: ${({ theme }) => ($disabled ? theme.GRAY_500 : theme.FONT)};

    &:focus {
        border-color: ${({ theme }) =>
            $validation === false
                ? theme.DANGER_500
                : theme.PRIMARY_500};
    }

    &::placeholder {
        color: ${({ theme }) => theme.GRAY_400};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.GRAY_100};
        color: ${({ theme }) => theme.GRAY_500};

        &::placeholder {
            color: ${({ theme }) => theme.GRAY_500};
        }
    }

    &[type="file"],
    &[type="color"] {
        padding: 0;
        cursor: pointer;
    }

    &[type="color"] {
        padding: ${SPACERS.XS};
        overflow: hidden;

        &::-webkit-color-swatch-wrapper,
        &::-webkit-color-swatch {
            padding: 0;
            margin: 0;
            width: 100%;
            border-radius: ${$inputVariant === "pill"
                ? RADIUSES.ROUND
                : RADIUSES.S};
        }
    }

    &[type="search"] {
        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            appearance: none;
        }
    }

    &[type="file"] {
        overflow: hidden;

        &::file-selector-button {
            height: 100%;
            background-color: ${({ theme }) => theme.GRAY_100};
            color: ${({ theme }) => theme.FONT};
            border: none;
            height: ${INPUT_HEIGHT}px;
            padding: 0 ${SPACERS.XS};
            line-height: 100%;
            transition: ${TRANSITIONS.SHORT};
            cursor: pointer;
            transform: translateY(-1px);
        }

        @media ${BREAKPOINTS.HOVER} {
            &:not(:disabled):hover::file-selector-button {
                background-color: ${({ theme }) => theme.GRAY_300};
            }

            &:not(:disabled):active::file-selector-button {
                background-color: ${({ theme }) => theme.GRAY_200};
            }
        }

        &:disabled {
            cursor: not-allowed;

            &::file-selector-button {
                cursor: not-allowed;
                color: ${({ theme }) => theme.GRAY_500};
            }
        }

        ${$inputBackground === "light"
            ? css`
                  &::file-selector-button {
                      background-color: ${COLORS_LIGHT.GRAY_100};
                      color: ${COLORS_LIGHT.FONT};
                  }

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover::file-selector-button {
                          background-color: ${COLORS_LIGHT.GRAY_300};
                      }

                      &:not(:disabled):active::file-selector-button {
                          background-color: ${COLORS_LIGHT.GRAY_200};
                      }
                  }

                  &:disabled {
                      &::file-selector-button {
                          color: ${COLORS_LIGHT.GRAY_500};
                      }
                  }
              `
            : $inputBackground === "dark" &&
              css`
                  &::file-selector-button {
                      background-color: ${COLORS_DARK.GRAY_100};
                      color: ${COLORS_DARK.FONT};
                  }

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover::file-selector-button {
                          background-color: ${COLORS_DARK.GRAY_300};
                      }

                      &:not(:disabled):active::file-selector-button {
                          background-color: ${COLORS_DARK.GRAY_200};
                      }
                  }

                  &:disabled {
                      &::file-selector-button {
                          color: ${COLORS_DARK.GRAY_500};
                      }
                  }
              `}
    }

    &[type="date"],
    &[type="datetime-local"],
    &[type="month"],
    &[type="week"],
    &[type="time"] {
        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            display: none;
        }
    }

    ${$hasListOpen &&
    css`
        border-color: ${({ theme }) =>
            $validation === false
                ? theme.DANGER_500
                : theme.PRIMARY_500};
    `}

    ${$inputBackground === "light"
        ? css`
              border-color: ${$hasListOpen
                  ? $validation === false
                      ? COLORS_LIGHT.DANGER_500
                      : COLORS_LIGHT.PRIMARY_500
                  : COLORS_LIGHT.GRAY_200};
              background-color: ${$validation === false
                  ? COLORS_LIGHT.DANGER_50
                  : $disabled
                  ? COLORS_LIGHT.GRAY_100
                  : COLORS_LIGHT.BACKGROUND};
              color: ${$disabled ? COLORS_LIGHT.GRAY_500 : COLORS_LIGHT.FONT};

              &:focus {
                  border-color: ${$validation === false
                      ? COLORS_LIGHT.DANGER_500
                      : COLORS_LIGHT.PRIMARY_500};
              }

              &::placeholder {
                  color: ${COLORS_LIGHT.GRAY_400};
              }

              &:disabled {
                  background-color: ${COLORS_LIGHT.GRAY_100};
                  color: ${COLORS_LIGHT.GRAY_500};

                  &::placeholder {
                      color: ${COLORS_LIGHT.GRAY_500};
                  }
              }
          `
        : $inputBackground === "dark" &&
          css`
              border-color: ${$hasListOpen
                  ? $validation === false
                      ? COLORS_DARK.DANGER_500
                      : COLORS_DARK.PRIMARY_500
                  : COLORS_DARK.GRAY_200};
              background-color: ${$validation === false
                  ? COLORS_DARK.DANGER_50
                  : $disabled
                  ? COLORS_DARK.GRAY_100
                  : COLORS_DARK.BACKGROUND};
              color: ${$disabled ? COLORS_DARK.GRAY_500 : COLORS_DARK.FONT};

              &:focus {
                  border-color: ${$validation === false
                      ? COLORS_DARK.DANGER_500
                      : COLORS_DARK.PRIMARY_500};
              }

              &::placeholder {
                  color: ${COLORS_DARK.GRAY_400};
              }

              &:disabled {
                  background-color: ${COLORS_DARK.GRAY_100};
                  color: ${COLORS_DARK.GRAY_500};

                  &::placeholder {
                      color: ${COLORS_DARK.GRAY_500};
                  }
              }
          `}
`
