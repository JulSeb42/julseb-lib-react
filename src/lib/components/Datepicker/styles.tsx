/*=============================================== Datepicker styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    FONT_WEIGHTS,
    RADIUSES,
    SPACERS,
    COLORS_LIGHT,
    COLORS_DARK,
    BREAKPOINTS,
    FONT_SIZES,
} from "../../"
import type {
    LibInputBackground,
    LibInputListDirection,
    LibInputVariant,
    LibValidationStatus,
} from "../../types"
import { InputBaseMixin } from "../ComponentsMixins"

const BUTTON_SIZE = 32
const BUTTON_MOBILE = 24

const DatePickerContainer = styled.div<{
    $inputBackground: LibInputBackground | undefined
}>`
    position: relative;
    width: 100%;
    height: ${BUTTON_SIZE}px;
    cursor: default;
    z-index: 0;

    &.Open {
        z-index: 30;
    }

    &.Disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.GRAY_100};
    }

    ${({ $inputBackground }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    &.Disabled {
                        background-color: ${COLORS_LIGHT.GRAY_100};
                    }
                `
            case "dark":
                return css`
                    &.Disabled {
                        background-color: ${COLORS_LIGHT.GRAY_100};
                    }
                `
            default:
                return null
        }
    }}
`

const SelectedDate = styled.div<{
    $inputVariant: LibInputVariant | undefined
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
    $disabled: boolean | undefined
    $withIconLeft: boolean
}>`
    font-weight: ${FONT_WEIGHTS.REGULAR};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    ${InputBaseMixin};
    padding-left: ${({ $withIconLeft }) => $withIconLeft && 0};
`

const TextDate = styled.span<{ $withIconLeft: boolean }>`
    flex-grow: 1;
    text-align: left;
    width: 100%;
    padding-left: ${({ $withIconLeft }) => $withIconLeft && SPACERS.XS};
`

const StyledCalendar = styled.div<{
    $direction: LibInputListDirection
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
}>`
    border-radius: ${RADIUSES.M};
    width: 100%;
    max-width: 400px;
    overflow: hidden;
    display: none;
    position: absolute;
    left: 0;
    overflow-x: scroll;
    border: 1px solid
        ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
    ${Mixins.HideScrollbar}

    &.Open {
        display: block;
    }

    ${({ $direction }) => {
        switch ($direction) {
            case "up":
                return css`
                    bottom: ${BUTTON_SIZE}px;
                `
            case "down":
                return css`
                    top: ${BUTTON_SIZE}px;
                `
            default:
                return null
        }
    }}

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    border-color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_500
                        : COLORS_LIGHT.PRIMARY_500};
                `
            case "dark":
                return css`
                    border-color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_500
                        : COLORS_DARK.PRIMARY_500};
                `
            default:
                return null
        }
    }}
`

const CalendarHeader = styled.div<{
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
}>`
    padding: ${SPACERS.XS};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    text-align: center;
    background-color: ${({ theme, $validationStatus }) =>
        $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
    color: ${({ theme }) => theme.BACKGROUND};

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    background-color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_500
                        : COLORS_LIGHT.PRIMARY_500};
                    color: ${COLORS_LIGHT.BACKGROUND};
                `
            case "dark":
                return css`
                    background-color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_500
                        : COLORS_DARK.PRIMARY_500};
                    color: ${COLORS_DARK.BACKGROUND};
                `
            default:
                return null
        }
    }}
`

const CalendarNavButton = styled.button<{
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
}>`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${RADIUSES.CIRCLE};
    padding: 0;
    border: none;
    background-color: transparent;
    color: currentColor;

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

    &:disabled {
        color: ${({ theme }) => theme.GRAY_500};
    }

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    @media ${BREAKPOINTS.HOVER} {
                        &:not(:disabled):hover {
                            background-color: ${Mixins.ColorsHoverHover(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "light"
                            )};
                        }

                        &:not(:disabled):active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "light"
                            )};
                        }
                    }

                    &:disabled {
                        color: ${COLORS_LIGHT.GRAY_500};
                    }
                `
            case "dark":
                return css`
                    @media ${BREAKPOINTS.HOVER} {
                        &:not(:disabled):hover {
                            background-color: ${Mixins.ColorsHoverHover(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "dark"
                            )};
                        }

                        &:not(:disabled):active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "dark"
                            )};
                        }
                    }

                    &:disabled {
                        color: ${COLORS_DARK.GRAY_500};
                    }
                `
            default:
                return null
        }
    }}
`

const CalendarEmptyDate = styled.span`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
`

const DaysContainer = styled.div<{
    $inputBackground: LibInputBackground | undefined
}>`
    ${Mixins.Grid({
        $col: 7,
        $gap: "xs",
        $padding: "xs",
        $justifyItems: "center",
    })};
    background-color: ${({ theme }) => theme.BACKGROUND};
    color: ${({ theme }) => theme.FONT};

    ${({ $inputBackground }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    background-color: ${COLORS_LIGHT.BACKGROUND};
                    color: ${COLORS_LIGHT.FONT};
                `
            case "dark":
                return css`
                    background-color: ${COLORS_DARK.BACKGROUND};
                    color: ${COLORS_DARK.FONT};
                `
            default:
                return null
        }
    }}
`

const CalendarDay = styled.button<{
    $inputBackground: LibInputBackground | undefined
    $validationStatus: LibValidationStatus | undefined
}>`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: ${RADIUSES.CIRCLE};
    background-color: transparent;
    font-size: ${FONT_SIZES.SMALL};
    color: ${({ theme }) => theme.FONT};

    &.Today {
        border-color: ${({ theme, $validationStatus }) =>
            Mixins.ColorsHoverDefault(
                $validationStatus === false ? "danger" : "primary",
                theme
            )};
    }

    &.Active {
        background-color: ${({ theme, $validationStatus }) =>
            Mixins.ColorsHoverDefault(
                $validationStatus === false ? "danger" : "primary",
                theme
            )};
        color: ${({ theme }) => theme.BACKGROUND};
    }

    @media ${BREAKPOINTS.HOVER} {
        &:not(:disabled):hover {
            background-color: ${({ theme, $validationStatus }) =>
                Mixins.ColorsHoverHover(
                    $validationStatus === false ? "danger" : "primary",
                    theme
                )};
            color: ${({ theme }) => theme.BACKGROUND};
        }

        &:not(:disabled):active {
            background-color: ${({ theme, $validationStatus }) =>
                Mixins.ColorsHoverActive(
                    $validationStatus === false ? "danger" : "primary",
                    theme
                )};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.GRAY_500};
    }

    @media ${BREAKPOINTS.MOBILE} {
        width: ${BUTTON_MOBILE}px;
        height: ${BUTTON_MOBILE}px;
    }

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${COLORS_LIGHT.FONT};

                    &.Today {
                        border-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary",
                            null,
                            "light"
                        )};
                    }

                    &.Active {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary",
                            null,
                            "light"
                        )};
                        color: ${COLORS_LIGHT.BACKGROUND};
                    }

                    @media ${BREAKPOINTS.HOVER} {
                        &:not(:disabled):hover {
                            background-color: ${Mixins.ColorsHoverHover(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "light"
                            )};
                            color: ${COLORS_LIGHT.BACKGROUND};
                        }

                        &:not(:disabled):active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "light"
                            )};
                        }
                    }

                    &:disabled {
                        color: ${COLORS_LIGHT.GRAY_500};
                    }
                `
            case "dark":
                return css`
                    color: ${COLORS_DARK.FONT};

                    &.Today {
                        border-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary",
                            null,
                            "dark"
                        )};
                    }

                    &.Active {
                        background-color: ${Mixins.ColorsHoverDefault(
                            $validationStatus === false ? "danger" : "primary",
                            null,
                            "dark"
                        )};
                        color: ${COLORS_DARK.BACKGROUND};
                    }

                    @media ${BREAKPOINTS.HOVER} {
                        &:not(:disabled):hover {
                            background-color: ${Mixins.ColorsHoverHover(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "dark"
                            )};
                            color: ${COLORS_DARK.BACKGROUND};
                        }

                        &:not(:disabled):active {
                            background-color: ${Mixins.ColorsHoverActive(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "dark"
                            )};
                        }
                    }

                    &:disabled {
                        color: ${COLORS_DARK.GRAY_500};
                    }
                `
            default:
                return null
        }
    }}
`

setDefaultTheme([
    DatePickerContainer,
    SelectedDate,
    StyledCalendar,
    CalendarHeader,
    CalendarNavButton,
    CalendarEmptyDate,
    DaysContainer,
    CalendarDay,
    TextDate,
])

export {
    DatePickerContainer,
    SelectedDate,
    StyledCalendar,
    CalendarHeader,
    CalendarNavButton,
    CalendarEmptyDate,
    DaysContainer,
    CalendarDay,
    TextDate,
}
