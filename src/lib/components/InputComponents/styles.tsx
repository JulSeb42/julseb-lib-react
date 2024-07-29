/*=============================================== InputComponents styles ===============================================*/

import type { FC } from "react"
import styled, { css } from "styled-components"
import {
    FONT_SIZES,
    FONT_WEIGHTS,
    INPUT_HEIGHT,
    LINE_HEIGHTS,
    Mixins,
    Text,
    setDefaultTheme,
    COLORS_LIGHT,
    COLORS_DARK,
    TRANSITIONS,
    BREAKPOINTS,
    SPACERS,
    RADIUSES,
} from "../.."
import type {
    CssFontStyle,
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
    LibInputListDirection,
} from "../../types"

const StyledInputContainer = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "xxs",
    })}

    &.Open {
        z-index: 20;
    }
`

const Label = styled.label`
    color: ${({ theme }) => theme.PRIMARY_500};
    font-weight: ${FONT_WEIGHTS.BLACK};
`

const LabelComment = styled.span`
    font-size: ${FONT_SIZES.SMALL};
    color: ${({ theme }) => theme.GRAY_500};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    font-style: italic;
    line-height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
`

const HelperBottomContainer = styled.div`
    ${Mixins.Flexbox({
        $gap: "xxs",
    })}
`

const HelperBottomIconContainer = styled.span`
    height: calc(${FONT_SIZES.SMALL} * ${LINE_HEIGHTS.BODY});
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

const HelperBottom = styled(Text).attrs({ tag: "small" })<{
    $fontStyle?: CssFontStyle
}>`
    font-style: ${({ $fontStyle }) => $fontStyle};
` as FC<any>

const StyledInputIconContainer = styled.span<{
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
    $disabled: boolean | undefined
    $inputVariant: LibInputVariant | undefined
}>`
    height: ${INPUT_HEIGHT}px;
    width: ${({ $inputVariant }) => {
        if ($inputVariant === "pill")
            return `calc(${INPUT_HEIGHT}px + ${SPACERS.XS})`
        return `${INPUT_HEIGHT}px`
    }};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    color: ${({ theme, $validationStatus, $disabled }) => {
        if ($validationStatus === false) return theme.DANGER_50
        if ($disabled) return theme.GRAY_500
        return theme.PRIMARY_500
    }};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}

    &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 1px;
        width: 1px;
        height: calc(${INPUT_HEIGHT}px - 2px);
        background-color: ${({ theme }) => theme.GRAY_200};
    }

    ${({ $inputBackground, $validationStatus, $disabled }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_500
                        : $disabled
                        ? COLORS_LIGHT.GRAY_500
                        : COLORS_LIGHT.PRIMARY_500};
                `
            case "dark":
                return css`
                    color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_500
                        : $disabled
                        ? COLORS_DARK.GRAY_500
                        : COLORS_DARK.PRIMARY_500};
                `
            default:
                return null
        }
    }}
`

const StyledInputRightContainer = styled.span<{
    $inputVariant: LibInputVariant | undefined
    $disabled: boolean | undefined
}>`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    height: ${INPUT_HEIGHT}px;
    cursor: ${({ $disabled }) => $disabled && "not-allowed"};
    padding: 0
        ${({ $inputVariant }) =>
            $inputVariant === "pill" ? SPACERS.S : SPACERS.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $gap: "xs",
    })};
`

const StyledInputValidationIcon = styled.span<{
    $inputBackground: LibInputBackground | undefined
    $validationStatus: LibValidationStatus
}>`
    height: 100%;
    width: fit-content;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    color: ${({ theme, $validationStatus }) =>
        $validationStatus === false ? theme.DANGER_500 : theme.SUCCESS_500};

    ${({ $inputBackground, $validationStatus }) =>
        $inputBackground === "light"
            ? css`
                  color: ${$validationStatus === false
                      ? COLORS_LIGHT.DANGER_500
                      : COLORS_LIGHT.SUCCESS_500};
              `
            : $inputBackground === "dark" &&
              css`
                  color: ${$validationStatus === false
                      ? COLORS_DARK.DANGER_500
                      : COLORS_DARK.SUCCESS_500};
              `}
`

const StyledInputButton = styled.button<{
    $inputBackground: LibInputBackground | undefined
    $validationStatus: LibValidationStatus | undefined
    $isSpan: boolean
    $disabled: boolean | undefined
}>`
    width: fit-content;
    height: ${INPUT_HEIGHT}px;
    border: none;
    background-color: transparent;
    padding: 0;
    color: ${({ theme, $validationStatus }) =>
        Mixins.ColorsHoverDefault(
            $validationStatus === false ? "danger" : "primary",
            theme
        )};
    transition: ${TRANSITIONS.SHORT};
    cursor: pointer;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};

    @media ${BREAKPOINTS.HOVER} {
        &:not(:disabled):hover {
            color: ${({ theme, $validationStatus, $isSpan }) =>
                !$isSpan &&
                Mixins.ColorsHoverHover(
                    $validationStatus === false ? "danger" : "primary",
                    theme
                )};
        }

        &:not(:disabled):active {
            color: ${({ theme, $validationStatus, $isSpan }) =>
                !$isSpan &&
                Mixins.ColorsHoverActive(
                    $validationStatus === false ? "danger" : "primary",
                    theme
                )};
        }
    }

    &:disabled {
        color: ${({ theme }) => theme.GRAY_500};
        cursor: not-allowed;
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${({ theme }) => theme.GRAY_500};
            cursor: not-allowed;
        `}

    ${({ $inputBackground, $validationStatus, $isSpan }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${Mixins.ColorsHoverDefault(
                        $validationStatus === false ? "danger" : "primary",
                        null,
                        "light"
                    )};

                    @media ${BREAKPOINTS.HOVER} {
                        &:not(:disabled):hover {
                            color: ${!$isSpan &&
                            Mixins.ColorsHoverHover(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "light"
                            )};
                        }

                        &:not(:disabled):active {
                            color: ${!$isSpan &&
                            Mixins.ColorsHoverActive(
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
                    color: ${Mixins.ColorsHoverDefault(
                        $validationStatus === false ? "danger" : "primary",
                        null,
                        "dark"
                    )};

                    @media ${BREAKPOINTS.HOVER} {
                        &:not(:disabled):hover {
                            color: ${!$isSpan &&
                            Mixins.ColorsHoverHover(
                                $validationStatus === false
                                    ? "danger"
                                    : "primary",
                                null,
                                "dark"
                            )};
                        }

                        &:not(:disabled):active {
                            color: ${!$isSpan &&
                            Mixins.ColorsHoverActive(
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

const StyledInputWrapper = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: inline-block;
    height: ${INPUT_HEIGHT}px;
    z-index: 1;

    &.Open {
        z-index: 20;
    }
`

const StyledListInput = styled.div<{
    $direction?: LibInputListDirection
    $inputBackground: LibInputBackground | undefined
    $validation: LibValidationStatus
    $inputVariant: LibInputVariant | undefined
}>`
    position: absolute;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    border: 1px solid transparent;
    max-height: 0;
    overflow: hidden;
    overflow-y: scroll;
    transition: ${TRANSITIONS.BEZIER};
    background-color: ${({ theme, $validation }) =>
        $validation === false ? theme.DANGER_50 : theme.BACKGROUND};
    border-radius: ${({ $inputVariant }) =>
        $inputVariant === "pill"
            ? `${RADIUSES.XL} ${RADIUSES.XL} ${RADIUSES.M} ${RADIUSES.M}`
            : RADIUSES.M};
    ${Mixins.HideScrollbar};

    &.Open {
        opacity: 1;
        visibility: visible;
        border-color: ${({ theme, $validation }) =>
            $validation === false ? theme.DANGER_500 : theme.PRIMARY_500};
        max-height: 300px;
    }

    ${({ $direction }) => {
        switch ($direction) {
            case "up":
                return css`
                    bottom: 0;

                    &.Open {
                        padding-bottom: ${INPUT_HEIGHT}px;
                    }
                `
            case "down":
                return css`
                    top: 0;

                    &.Open {
                        padding-top: ${INPUT_HEIGHT}px;
                    }
                `
            default:
                return null
        }
    }}

    ${({ $inputBackground, $validation }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    border-color: transparent;
                    background-color: ${$validation === false
                        ? COLORS_LIGHT.DANGER_50
                        : COLORS_LIGHT.BACKGROUND};

                    &.Open {
                        border-color: ${$validation === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                    }
                `
            case "dark":
                return css`
                    border-color: transparent;
                    background-color: ${$validation === false
                        ? COLORS_DARK.DANGER_50
                        : COLORS_DARK.BACKGROUND};
                `
            default:
                return null
        }
    }}
`

const StyledListInputItem = styled.span<{
    $validation: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
    $readOnly: boolean | undefined
}>`
    padding: ${SPACERS.S};
    width: 100%;
    color: ${({ theme }) => theme.FONT};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}

    &.Active {
        background-color: ${({ theme, $validation }) =>
            $validation === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    &.Hovered {
        background-color: ${({ theme, $validation }) =>
            $validation === false ? theme.DANGER_300 : theme.PRIMARY_300};
    }

    &.Active,
    &.Hovered {
        color: ${({ theme }) => theme.BACKGROUND};
    }

    ${({ theme, $readOnly, $validation }) =>
        !$readOnly &&
        css`
            cursor: pointer;

            @media ${BREAKPOINTS.HOVER} {
                &:hover {
                    background-color: ${Mixins.ColorsHoverHover(
                        $validation === false ? "danger" : "primary",
                        theme
                    )};
                    color: ${theme.BACKGROUND};
                }

                &:active {
                    background-color: ${Mixins.ColorsHoverActive(
                        $validation === false ? "danger" : "primary",
                        theme
                    )};
                }
            }
        `}

    ${({ $inputBackground, $validation, $readOnly }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${COLORS_LIGHT.FONT};

                    &.Active {
                        background-color: ${$validation === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                        color: ${COLORS_LIGHT.BACKGROUND};
                    }

                    ${!$readOnly &&
                    css`
                        @media ${BREAKPOINTS.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $validation === false
                                        ? "danger"
                                        : "primary",
                                    null,
                                    "light"
                                )};
                                color: ${COLORS_LIGHT.BACKGROUND};
                            }

                            &:active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $validation === false
                                        ? "danger"
                                        : "primary",
                                    null,
                                    "light"
                                )};
                            }
                        }
                    `}
                `
            case "dark":
                return css`
                    color: ${COLORS_DARK.FONT};

                    &.Active {
                        background-color: ${$validation === false
                            ? COLORS_DARK.DANGER_500
                            : COLORS_DARK.PRIMARY_500};
                        color: ${COLORS_DARK.BACKGROUND};
                    }

                    ${!$readOnly &&
                    css`
                        @media ${BREAKPOINTS.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $validation === false
                                        ? "danger"
                                        : "primary",
                                    null,
                                    "dark"
                                )};
                                color: ${COLORS_DARK.BACKGROUND};
                            }

                            &:active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $validation === false
                                        ? "danger"
                                        : "primary",
                                    null,
                                    "dark"
                                )};
                            }
                        }
                    `}
                `
            default:
                return null
        }
    }}
`

setDefaultTheme([
    StyledInputContainer,
    Label,
    LabelComment,
    HelperBottomContainer,
    HelperBottomIconContainer,
    HelperBottom,
    StyledInputIconContainer,
    StyledInputRightContainer,
    StyledInputValidationIcon,
    StyledInputButton,
    StyledInputWrapper,
    StyledListInput,
    StyledListInputItem,
])

export {
    StyledInputContainer,
    Label,
    LabelComment,
    HelperBottomContainer,
    HelperBottomIconContainer,
    HelperBottom,
    StyledInputIconContainer,
    StyledInputRightContainer,
    StyledInputValidationIcon,
    StyledInputButton,
    StyledInputWrapper,
    StyledListInput,
    StyledListInputItem,
}
