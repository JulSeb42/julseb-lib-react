/*=============================================== InputSlider styles ===============================================*/

import styled, { css } from "styled-components"
import { getPercentage } from "ts-utils-julseb"
import {
    BREAKPOINTS,
    OVERLAYS,
    RADIUSES,
    SHADOWS,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
    THEME_LIGHT,
    THEME_DARK,
} from "../../"
import type { LibInputBackground, LibValidationStatus } from "../../types"

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
`

const DOT_SIZE = 16

const StyledInputSlider = styled.input<{
    $validation: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
    $value: number
    $max: number
}>`
    -webkit-appearance: none;
    -moz-appearance: initial;
    appearance: none;
    width: 100%;
    height: 8px;
    background-color: ${({ $validation, theme }) =>
        $validation === "not-passed" ? theme.DANGER_50 : theme.GRAY_200};
    border: none;
    border-radius: ${RADIUSES.ROUND};
    position: relative;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        -moz-appearance: initial;
        appearance: none;
        background-color: ${({ theme, $validation }) =>
            theme.ColorsHoverDefault(
                $validation === "not-passed" ? "danger" : "primary"
            )};
        width: ${DOT_SIZE}px;
        height: ${DOT_SIZE}px;
        border-radius: ${RADIUSES.CIRCLE};
        cursor: pointer;
        transition: ${TRANSITIONS.SHORT};
        box-shadow: ${SHADOWS.S};
        position: relative;
        z-index: 2;

        @media ${BREAKPOINTS.HOVER} {
            &:not(:disabled):hover {
                background-color: ${({ theme, $validation }) =>
                    theme.ColorsHoverHover(
                        $validation === "not-passed" ? "danger" : "primary"
                    )};
            }

            &:not(:disabled):active {
                background-color: ${({ theme, $validation }) =>
                    theme.ColorsHoverActive(
                        $validation === "not-passed" ? "danger" : "primary"
                    )};
            }
        }
    }

    &::-moz-range-thumb {
        border: none;
        background-color: ${({ theme, $validation }) =>
            theme.ColorsHoverDefault(
                $validation === "not-passed" ? "danger" : "primary"
            )};
    }

    &:before,
    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: ${({ theme, $validation }) =>
            theme.ColorsHoverDefault(
                $validation === "not-passed" ? "danger" : "primary"
            )};
        height: 100%;
        width: ${({ $value, $max }) => getPercentage($value, $max)}%;
        border-radius: ${RADIUSES.ROUND};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.GRAY_100};
        cursor: not-allowed;

        &::-webkit-slider-thumb {
            background-color: ${({ theme }) => theme.GRAY_500};
            cursor: not-allowed;
        }

        &::-moz-range-thumb {
            background-color: ${({ theme }) => theme.GRAY_500};
            cursor: not-allowed;
        }

        &:before,
        &::before {
            background-color: ${({ theme }) => theme.GRAY_500};
        }
    }

    ${({ $inputBackground, $validation }) =>
        $inputBackground === "light"
            ? css`
                  background-color: ${$validation === "not-passed"
                      ? THEME_LIGHT.DANGER_50
                      : THEME_LIGHT.GRAY_200};

                  &::-webkit-slider-thumb {
                      background-color: ${THEME_LIGHT.ColorsHoverDefault(
                          $validation === "not-passed" ? "danger" : "primary"
                      )};

                      @media ${BREAKPOINTS.HOVER} {
                          &:not(:disabled):hover {
                              background-color: ${THEME_LIGHT.ColorsHoverHover(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }

                          &:not(:disabled):active {
                              background-color: ${THEME_LIGHT.ColorsHoverActive(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }
                      }
                  }

                  &::-moz-range-thumb {
                      background-color: ${THEME_LIGHT.ColorsHoverDefault(
                          $validation === "not-passed" ? "danger" : "primary"
                      )};
                  }

                  &:before,
                  &::before {
                      background-color: ${THEME_LIGHT.ColorsHoverDefault(
                          $validation === "not-passed" ? "danger" : "primary"
                      )};
                  }

                  &:disabled {
                      background-color: ${THEME_LIGHT.GRAY_100};

                      &::-webkit-slider-thumb {
                          background-color: ${THEME_LIGHT.GRAY_500};
                      }

                      &::-moz-range-thumb {
                          background-color: ${THEME_LIGHT.GRAY_500};
                      }

                      &:before,
                      &::before {
                          background-color: ${THEME_LIGHT.GRAY_500};
                      }
                  }
              `
            : $inputBackground === "dark" &&
              css`
                  background-color: ${$validation === "not-passed"
                      ? THEME_DARK.DANGER_50
                      : THEME_DARK.GRAY_200};

                  &::-webkit-slider-thumb {
                      background-color: ${THEME_DARK.ColorsHoverDefault(
                          $validation === "not-passed" ? "danger" : "primary"
                      )};

                      @media ${BREAKPOINTS.HOVER} {
                          &:not(:disabled):hover {
                              background-color: ${THEME_DARK.ColorsHoverHover(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }

                          &:not(:disabled):active {
                              background-color: ${THEME_DARK.ColorsHoverActive(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }
                      }
                  }

                  &::-moz-range-thumb {
                      background-color: ${THEME_DARK.ColorsHoverDefault(
                          $validation === "not-passed" ? "danger" : "primary"
                      )};
                  }

                  &:before,
                  &::before {
                      background-color: ${THEME_DARK.ColorsHoverDefault(
                          $validation === "not-passed" ? "danger" : "primary"
                      )};
                  }

                  &:disabled {
                      background-color: ${THEME_DARK.GRAY_100};

                      &::-webkit-slider-thumb {
                          background-color: ${THEME_DARK.GRAY_500};
                      }

                      &::-moz-range-thumb {
                          background-color: ${THEME_DARK.GRAY_500};
                      }

                      &:before,
                      &::before {
                          background-color: ${THEME_DARK.GRAY_500};
                      }
                  }
              `}
`

const Tooltip = styled.span<{
    $isVisible: boolean
    $value: number
    $max: number
}>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    position: absolute;
    top: 0;
    transform: translateY(-120%);
    background-color: ${OVERLAYS.BLACK_50};
    color: ${({ theme }) => theme.WHITE};
    padding: ${SPACERS.XXS} ${SPACERS.S};
    border-radius: ${RADIUSES.S};
    transition: opacity 200ms ease;
    left: ${({ $value, $max }) => {
        const rangeWidth = getPercentage($value, $max)
        return `calc(${rangeWidth}% + ${-8 - rangeWidth * 0.22}px)`
    }};

    &:after {
        content: "";
        position: absolute;
        border-style: solid;
        border-width: 4px;
        border-color: ${OVERLAYS.BLACK_50} transparent transparent transparent;
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
    }
`

setDefaultTheme([SliderContainer, StyledInputSlider, Tooltip])

export { SliderContainer, StyledInputSlider, Tooltip }
