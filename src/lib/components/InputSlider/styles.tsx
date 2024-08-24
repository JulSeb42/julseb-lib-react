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
    COLORS_LIGHT,
    COLORS_DARK,
    Mixins,
} from "../../"
import type { LibInputBackground, LibValidationStatus } from "../../types"

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
`

const DOT_SIZE = 16

const StyledInputSlider = styled.input<{
    $validationStatus: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
    $value: number
    $max: number
}>`
    -webkit-appearance: none;
    -moz-appearance: initial;
    appearance: none;
    width: 100%;
    height: 8px;
    background-color: ${({ $validationStatus, theme }) =>
        $validationStatus === false ? theme.DANGER_50 : theme.GRAY_200};
    border: none;
    border-radius: ${RADIUSES.ROUND};
    position: relative;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        -moz-appearance: initial;
        appearance: none;
        background-color: ${({ theme, $validationStatus }) =>
            Mixins.ColorsHoverDefault(
                $validationStatus === false ? "danger" : "primary",
                theme
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
                background-color: ${({ theme, $validationStatus }) =>
                    Mixins.ColorsHoverHover(
                        $validationStatus === false ? "danger" : "primary",
                        theme
                    )};
            }

            &:not(:disabled):active {
                background-color: ${({ theme, $validationStatus }) =>
                    Mixins.ColorsHoverActive(
                        $validationStatus === false ? "danger" : "primary",
                        theme
                    )};
            }
        }
    }

    &::-moz-range-thumb {
        border: none;
        background-color: ${({ theme, $validationStatus }) =>
            Mixins.ColorsHoverDefault(
                $validationStatus === false ? "danger" : "primary",
                theme
            )};
    }

    &:before,
    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: ${({ theme, $validationStatus }) =>
            Mixins.ColorsHoverDefault(
                $validationStatus === false ? "danger" : "primary",
                theme
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

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    background-color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_50
                        : COLORS_LIGHT.GRAY_200};

                    &::-webkit-slider-thumb {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary"
                        )};

                        @media ${BREAKPOINTS.HOVER} {
                            &:not(:disabled):hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $validationStatus === false
                                        ? "danger"
                                        : "primary"
                                )};
                            }

                            &:not(:disabled):active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $validationStatus === false
                                        ? "danger"
                                        : "primary"
                                )};
                            }
                        }
                    }

                    &::-moz-range-thumb {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary"
                        )};
                    }

                    &:before,
                    &::before {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary"
                        )};
                    }

                    &:disabled {
                        background-color: ${COLORS_LIGHT.GRAY_100};

                        &::-webkit-slider-thumb {
                            background-color: ${COLORS_LIGHT.GRAY_500};
                        }

                        &::-moz-range-thumb {
                            background-color: ${COLORS_LIGHT.GRAY_500};
                        }

                        &:before,
                        &::before {
                            background-color: ${COLORS_LIGHT.GRAY_500};
                        }
                    }
                `
            case "dark":
                return css`
                    background-color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_50
                        : COLORS_DARK.GRAY_200};

                    &::-webkit-slider-thumb {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary"
                        )};

                        @media ${BREAKPOINTS.HOVER} {
                            &:not(:disabled):hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $validationStatus === false
                                        ? "danger"
                                        : "primary"
                                )};
                            }

                            &:not(:disabled):active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $validationStatus === false
                                        ? "danger"
                                        : "primary"
                                )};
                            }
                        }
                    }

                    &::-moz-range-thumb {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary"
                        )};
                    }

                    &:before,
                    &::before {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary"
                        )};
                    }

                    &:disabled {
                        background-color: ${COLORS_DARK.GRAY_100};

                        &::-webkit-slider-thumb {
                            background-color: ${COLORS_DARK.GRAY_500};
                        }

                        &::-moz-range-thumb {
                            background-color: ${COLORS_DARK.GRAY_500};
                        }

                        &:before,
                        &::before {
                            background-color: ${COLORS_DARK.GRAY_500};
                        }
                    }
                `
            default:
                return null
        }
    }}
`

const Tooltip = styled.span<{
    $value: number
    $max: number
}>`
    opacity: 0;
    visibility: hidden;
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

    &.Visible {
        opacity: 1;
        visibility: visible;
    }

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
