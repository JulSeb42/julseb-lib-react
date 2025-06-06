import styled, { css } from "styled-components"
import {
    Mixins,
    INPUT_HEIGHT,
    setDefaultTheme,
    COLORS_LIGHT,
    COLORS_DARK,
    TRANSITIONS,
    MEDIA,
    SPACERS,
    RADIUSES,
} from "../.."
import type {
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
    LibInputListDirection,
} from "../../types"

const StyledInputIconContainer = styled.span<{
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
    $disabled: boolean | undefined
    $inputVariant: LibInputVariant | undefined
}>`
    height: ${INPUT_HEIGHT}px;
    width: 32px;
    position: relative;
    z-index: 1;
    color: ${({ theme, $validationStatus, $disabled }) => {
        if ($validationStatus === false) return theme.DANGER_500
        if ($disabled) return theme.GRAY_500
        return theme.PRIMARY_500
    }};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}

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

const CommonLeftAndRight = ({
    $disabled,
    $withBorder,
}: {
    $disabled: boolean | undefined
    $withBorder: boolean | undefined
}) => css`
    height: ${INPUT_HEIGHT}px;
    cursor: ${$disabled && "not-allowed"};
    position: relative;
    z-index: 1;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};

    ${$withBorder &&
    css`
        &:after {
            content: "";
            position: absolute;
            top: 0;
            width: 1px;
            height: ${INPUT_HEIGHT}px;
            background-color: ${({ theme }) => theme.GRAY_200};
        }
    `}
`

const StyledInputLeftContainer = styled.span<{
    $disabled: boolean | undefined
}>`
    ${({ $disabled }) => CommonLeftAndRight({ $disabled, $withBorder: true })}

    &:after {
        right: 0;
    }
`

const StyledInputRightContainer = styled.span<{
    $disabled: boolean | undefined
    $withPadding?: boolean
    $withBorder: boolean | undefined
}>`
    ${CommonLeftAndRight}
    gap: ${SPACERS.XS};

    ${({ $withPadding }) =>
        $withPadding &&
        css`
            padding: 0 ${SPACERS.XS};
        `}

    ${({ $withBorder }) =>
        $withBorder &&
        css`
            &:after {
                left: 0;
            }
        `}
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

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_500
                        : COLORS_LIGHT.SUCCESS_500};
                `
            case "dark":
                return css`
                    color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_500
                        : COLORS_DARK.SUCCESS_500};
                `
            default:
                return null
        }
    }}
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

    @media ${MEDIA.HOVER} {
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

                    @media ${MEDIA.HOVER} {
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

                    @media ${MEDIA.HOVER} {
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

const StyledInputWrapper = styled.div<{
    $inputBackground: LibInputBackground | undefined
    $inputVariant: LibInputVariant | undefined
    $isTextArea?: boolean
    $validationStatus: LibValidationStatus
}>`
    height: ${({ $isTextArea }) => !$isTextArea && `${INPUT_HEIGHT}px`};
    width: 100%;
    position: relative;
    z-index: 1;
    border-radius: ${({ $inputVariant }) =>
        $inputVariant === "pill" ? RADIUSES.ROUND : RADIUSES.S};
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    background-color: ${({ theme, $validationStatus }) =>
        $validationStatus === false ? theme.DANGER_50 : theme.BACKGROUND};
    color: ${({ theme }) => theme.FONT};
    ${Mixins.Flexbox({
        $alignItems: "stretch",
    })}
    overflow: hidden;

    &:has(input:focus),
    &:has(select:focus),
    &:has(textarea:focus) {
        border-color: ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    &:has(input:disabled),
    &:has(select:disabled),
    &:has(textarea:disabled) {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.GRAY_100};
        color: ${({ theme }) => theme.GRAY_500};
    }

    &.Open {
        border-color: ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    border: 1px solid ${COLORS_LIGHT.GRAY_200};
                    background-color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_50
                        : COLORS_LIGHT.BACKGROUND};
                    color: ${COLORS_LIGHT.FONT};

                    &:has(input:focus),
                    &:has(select:focus),
                    &:has(textarea:focus) {
                        border-color: ${$validationStatus === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                    }

                    &:has(input:disabled),
                    &:has(select:disabled),
                    &:has(textarea:disabled) {
                        background-color: ${COLORS_LIGHT.GRAY_100};
                        color: ${COLORS_LIGHT.GRAY_500};
                    }
                `
            case "dark":
                return css`
                    border: 1px solid ${COLORS_DARK.GRAY_200};
                    background-color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_50
                        : COLORS_DARK.BACKGROUND};
                    color: ${COLORS_DARK.FONT};

                    &:has(input:focus),
                    &:has(select:focus),
                    &:has(textarea:focus) {
                        border-color: ${$validationStatus === false
                            ? COLORS_DARK.DANGER_500
                            : COLORS_DARK.PRIMARY_500};
                    }

                    &:has(input:disabled),
                    &:has(select:disabled),
                    &:has(textarea:disabled) {
                        background-color: ${COLORS_DARK.GRAY_100};
                        color: ${COLORS_DARK.GRAY_500};
                    }
                `
            default:
                return null
        }
    }}
`

const StyledListInput = styled.div<{
    $direction?: LibInputListDirection
    $inputBackground: LibInputBackground | undefined
    $validationStatus: LibValidationStatus
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
    background-color: ${({ theme, $validationStatus }) =>
        $validationStatus === false ? theme.DANGER_50 : theme.BACKGROUND};
    border-radius: ${({ $inputVariant }) =>
        $inputVariant === "pill"
            ? `${RADIUSES.XL} ${RADIUSES.XL} ${RADIUSES.M} ${RADIUSES.M}`
            : RADIUSES.M};
    ${Mixins.HideScrollbar};
    z-index: 0;

    &.Open {
        opacity: 1;
        visibility: visible;
        border-color: ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
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

    ${({ $inputBackground, $validationStatus }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    border-color: transparent;
                    background-color: ${$validationStatus === false
                        ? COLORS_LIGHT.DANGER_50
                        : COLORS_LIGHT.BACKGROUND};

                    &.Open {
                        border-color: ${$validationStatus === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                    }
                `
            case "dark":
                return css`
                    border-color: transparent;
                    background-color: ${$validationStatus === false
                        ? COLORS_DARK.DANGER_50
                        : COLORS_DARK.BACKGROUND};
                `
            default:
                return null
        }
    }}
`

const StyledListInputItem = styled.span<{
    $validationStatus: LibValidationStatus
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
        background-color: ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    &.Hovered {
        background-color: ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_300 : theme.PRIMARY_300};
    }

    &.Active,
    &.Hovered {
        color: ${({ theme }) => theme.BACKGROUND};
    }

    ${({ theme, $readOnly, $validationStatus }) =>
        !$readOnly &&
        css`
            cursor: pointer;

            @media ${MEDIA.HOVER} {
                &:hover {
                    background-color: ${Mixins.ColorsHoverHover(
                        $validationStatus === false ? "danger" : "primary",
                        theme
                    )};
                    color: ${theme.BACKGROUND};
                }

                &:active {
                    background-color: ${Mixins.ColorsHoverActive(
                        $validationStatus === false ? "danger" : "primary",
                        theme
                    )};
                }
            }
        `}

    ${({ $inputBackground, $validationStatus, $readOnly }) => {
        switch ($inputBackground) {
            case "light":
                return css`
                    color: ${COLORS_LIGHT.FONT};

                    &.Active {
                        background-color: ${$validationStatus === false
                            ? COLORS_LIGHT.DANGER_500
                            : COLORS_LIGHT.PRIMARY_500};
                        color: ${COLORS_LIGHT.BACKGROUND};
                    }

                    ${!$readOnly &&
                    css`
                        @media ${MEDIA.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $validationStatus === false
                                        ? "danger"
                                        : "primary",
                                    null,
                                    "light"
                                )};
                                color: ${COLORS_LIGHT.BACKGROUND};
                            }

                            &:active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $validationStatus === false
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
                        background-color: ${$validationStatus === false
                            ? COLORS_DARK.DANGER_500
                            : COLORS_DARK.PRIMARY_500};
                        color: ${COLORS_DARK.BACKGROUND};
                    }

                    ${!$readOnly &&
                    css`
                        @media ${MEDIA.HOVER} {
                            &:hover {
                                background-color: ${Mixins.ColorsHoverHover(
                                    $validationStatus === false
                                        ? "danger"
                                        : "primary",
                                    null,
                                    "dark"
                                )};
                                color: ${COLORS_DARK.BACKGROUND};
                            }

                            &:active {
                                background-color: ${Mixins.ColorsHoverActive(
                                    $validationStatus === false
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

const InputPrefixAndSuffixCommon = ({
    $inputBackground,
}: {
    $inputBackground: LibInputBackground | undefined
}) => css`
    height: 100%;
    line-height: ${INPUT_HEIGHT}px;
    background-color: ${({ theme }) => theme.GRAY_100};
    color: ${({ theme }) => theme.FONT};
    padding: 0 ${SPACERS.XS};
    position: relative;

    &:before {
        content: "";
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.GRAY_200};
        display: inline-block;
        position: absolute;
        top: 0;
    }

    ${() => {
        switch ($inputBackground) {
            case "light":
                return css`
                    background-color: ${COLORS_LIGHT.GRAY_100};
                    color: ${COLORS_LIGHT.FONT};

                    ${
                        "" /* &:before {
                        background-color: ${COLORS_LIGHT.GRAY_200};
                    } */
                    }
                `
            case "dark":
                return css`
                    background-color: ${COLORS_DARK.GRAY_100};
                    color: ${COLORS_DARK.FONT};

                    ${
                        "" /* &:before {
                        background-color: ${COLORS_DARK.GRAY_200};
                    } */
                    }
                `
            default:
                return null
        }
    }}
`

const StyledInputPrefix = styled.span<{
    $inputBackground: LibInputBackground | undefined
}>`
    ${InputPrefixAndSuffixCommon};

    &:before {
        right: 0;
    }
`

const StyledInputSuffix = styled.span<{
    $inputBackground: LibInputBackground | undefined
}>`
    ${InputPrefixAndSuffixCommon};

    &:before {
        left: 0;
    }
`

const StyledInputAndListContainer = styled.div`
    position: relative;

    &.Open {
        z-index: 20;
    }
`

setDefaultTheme([
    StyledInputIconContainer,
    StyledInputLeftContainer,
    StyledInputRightContainer,
    StyledInputValidationIcon,
    StyledInputButton,
    StyledInputWrapper,
    StyledListInput,
    StyledListInputItem,
    StyledInputPrefix,
    StyledInputSuffix,
    StyledInputAndListContainer,
])

export {
    StyledInputIconContainer,
    StyledInputLeftContainer,
    StyledInputRightContainer,
    StyledInputValidationIcon,
    StyledInputButton,
    StyledInputWrapper,
    StyledListInput,
    StyledListInputItem,
    StyledInputPrefix,
    StyledInputSuffix,
    StyledInputAndListContainer,
}
