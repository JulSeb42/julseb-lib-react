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
    THEME_LIGHT,
    THEME_DARK,
    TRANSITIONS,
    BREAKPOINTS,
    SPACERS,
    RADIUSES,
} from "../.."
import type {
    FontStyle,
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
    LibListDirection,
} from "../../types"

const StyledInputContainer = styled.div<{ $hasListOpen?: boolean }>`
    position: relative;
    z-index: ${({ $hasListOpen }) => ($hasListOpen ? 20 : 1)};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "xxs",
    })}
`

const Label = styled.label`
    color: ${({ theme }) => theme.PRIMARY_500};
    font-weight: ${FONT_WEIGHTS.BLACK};
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
    $fontStyle?: FontStyle
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
    width: ${({ $inputVariant }) =>
        $inputVariant === "pill"
            ? `calc(${INPUT_HEIGHT}px + ${SPACERS.XS})`
            : `${INPUT_HEIGHT}px`};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    color: ${({ theme, $validationStatus, $disabled }) =>
        $validationStatus === "not-passed"
            ? theme.DANGER_500
            : $disabled
            ? theme.GRAY_500
            : theme.PRIMARY_500};
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

    ${({ $inputBackground, $disabled, $validationStatus }) =>
        $inputBackground === "light"
            ? css`
                  color: ${$validationStatus === "not-passed"
                      ? THEME_LIGHT.DANGER_500
                      : $disabled
                      ? THEME_LIGHT.GRAY_500
                      : THEME_LIGHT.PRIMARY_500};
              `
            : $inputBackground === "dark" &&
              css`
                  color: ${$validationStatus === "not-passed"
                      ? THEME_DARK.DANGER_500
                      : $disabled
                      ? THEME_DARK.GRAY_500
                      : THEME_DARK.PRIMARY_500};
              `}
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
        $validationStatus === "not-passed"
            ? theme.DANGER_500
            : theme.SUCCESS_500};

    ${({ $inputBackground, $validationStatus }) =>
        $inputBackground === "light"
            ? css`
                  color: ${$validationStatus === "not-passed"
                      ? THEME_LIGHT.DANGER_500
                      : THEME_LIGHT.SUCCESS_500};
              `
            : $inputBackground === "dark" &&
              css`
                  color: ${$validationStatus === "not-passed"
                      ? THEME_DARK.DANGER_500
                      : THEME_DARK.SUCCESS_500};
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
            $validationStatus === "not-passed" ? "danger" : "primary",
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
                    $validationStatus === "not-passed" ? "danger" : "primary",
                    theme
                )};
        }

        &:not(:disabled):active {
            color: ${({ theme, $validationStatus, $isSpan }) =>
                !$isSpan &&
                Mixins.ColorsHoverActive(
                    $validationStatus === "not-passed" ? "danger" : "primary",
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

    ${({ $inputBackground, $validationStatus, $isSpan }) =>
        $inputBackground === "light"
            ? css`
                  color: ${THEME_LIGHT.ColorsHoverDefault(
                      $validationStatus === "not-passed" ? "danger" : "primary"
                  )};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          color: ${!$isSpan &&
                          THEME_LIGHT.ColorsHoverHover(
                              $validationStatus === "not-passed"
                                  ? "danger"
                                  : "primary"
                          )};
                      }

                      &:not(:disabled):active {
                          color: ${!$isSpan &&
                          THEME_LIGHT.ColorsHoverActive(
                              $validationStatus === "not-passed"
                                  ? "danger"
                                  : "primary"
                          )};
                      }
                  }

                  &:disabled {
                      color: ${THEME_LIGHT.GRAY_500};
                  }
              `
            : $inputBackground === "dark" &&
              css`
                  color: ${THEME_DARK.ColorsHoverDefault(
                      $validationStatus === "not-passed" ? "danger" : "primary"
                  )};

                  @media ${BREAKPOINTS.HOVER} {
                      &:not(:disabled):hover {
                          color: ${!$isSpan &&
                          THEME_DARK.ColorsHoverHover(
                              $validationStatus === "not-passed"
                                  ? "danger"
                                  : "primary"
                          )};
                      }

                      &:not(:disabled):active {
                          color: ${!$isSpan &&
                          THEME_DARK.ColorsHoverActive(
                              $validationStatus === "not-passed"
                                  ? "danger"
                                  : "primary"
                          )};
                      }
                  }

                  &:disabled {
                      color: ${THEME_DARK.GRAY_500};
                  }
              `}
`

const StyledInputWrapper = styled.div<{ $hasListOpen?: boolean }>`
    position: relative;
    width: 100%;
    height: fit-content;
    display: inline-block;
    height: ${INPUT_HEIGHT}px;
    z-index: ${({ $hasListOpen }) => ($hasListOpen ? 20 : 1)};
`

const StyledListInput = styled.div<{
    $isOpen: boolean
    $direction?: LibListDirection
    $inputBackground: LibInputBackground | undefined
    $validation: LibValidationStatus
    $inputVariant: LibInputVariant | undefined
}>`
    position: absolute;
    left: 0;
    width: 100%;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    border: 1px solid
        ${({ theme, $isOpen, $validation }) =>
            $isOpen
                ? $validation === "not-passed"
                    ? theme.DANGER_500
                    : theme.PRIMARY_500
                : "transparent"};
    max-height: ${({ $isOpen }) => ($isOpen ? "300px" : 0)};
    overflow: hidden;
    overflow-y: scroll;
    transition: ${TRANSITIONS.BEZIER};
    background-color: ${({ theme, $validation }) =>
        $validation === "not-passed" ? theme.DANGER_50 : theme.BACKGROUND};
    border-radius: ${({ $inputVariant }) =>
        $inputVariant === "pill"
            ? `${RADIUSES.XL} ${RADIUSES.XL} ${RADIUSES.M} ${RADIUSES.M}`
            : RADIUSES.M};
    ${Mixins.HideScrollbar};

    ${({ $direction, $isOpen }) =>
        $direction === "up"
            ? css`
                  bottom: 0;
                  padding-bottom: ${$isOpen && `${INPUT_HEIGHT}px`};
              `
            : css`
                  top: 0;
                  padding-top: ${$isOpen && `${INPUT_HEIGHT}px`};
              `}

    ${({ $inputBackground, $isOpen, $validation }) =>
        $inputBackground === "light"
            ? css`
                  border-color: ${$isOpen
                      ? $validation === "not-passed"
                          ? THEME_LIGHT.DANGER_500
                          : THEME_LIGHT.PRIMARY_500
                      : "transparent"};
                  background-color: ${$validation === "not-passed"
                      ? THEME_LIGHT.DANGER_50
                      : THEME_LIGHT.BACKGROUND};
              `
            : $inputBackground === "dark" &&
              css`
                  border-color: ${$isOpen
                      ? $validation === "not-passed"
                          ? THEME_DARK.DANGER_500
                          : THEME_DARK.PRIMARY_500
                      : "transparent"};
                  background-color: ${$validation === "not-passed"
                      ? THEME_DARK.DANGER_50
                      : THEME_DARK.BACKGROUND};
              `}
`

const StyledListInputItem = styled.span<{
    $validation: LibValidationStatus
    $inputBackground: LibInputBackground | undefined
    $isActive: boolean | undefined
    $readOnly: boolean | undefined
}>`
    padding: ${SPACERS.S};
    width: 100%;
    background-color: ${({ theme, $isActive, $validation }) =>
        $isActive &&
        ($validation === "not-passed" ? theme.DANGER_500 : theme.PRIMARY_500)};
    color: ${({ $isActive, theme }) =>
        $isActive ? theme.BACKGROUND : theme.FONT};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}

    ${({ theme, $readOnly, $validation }) =>
        !$readOnly &&
        css`
            cursor: pointer;

            @media ${BREAKPOINTS.HOVER} {
                &:hover {
                    background-color: ${Mixins.ColorsHoverHover(
                        $validation === "not-passed" ? "danger" : "primary",
                        theme
                    )};
                    color: ${theme.BACKGROUND};
                }

                &:active {
                    background-color: ${Mixins.ColorsHoverActive(
                        $validation === "not-passed" ? "danger" : "primary",
                        theme
                    )};
                }
            }
        `}

        ${({ $inputBackground, $readOnly, $isActive, $validation }) =>
        $inputBackground === "light"
            ? css`
                  background-color: ${$isActive &&
                  ($validation === "not-passed"
                      ? THEME_LIGHT.DANGER_500
                      : THEME_LIGHT.PRIMARY_500)};
                  color: ${$isActive
                      ? THEME_LIGHT.BACKGROUND
                      : THEME_LIGHT.FONT};

                  ${!$readOnly &&
                  css`
                      @media ${BREAKPOINTS.HOVER} {
                          &:hover {
                              background-color: ${THEME_LIGHT.ColorsHoverHover(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                              color: ${THEME_LIGHT.BACKGROUND};
                          }

                          &:active {
                              background-color: ${THEME_LIGHT.ColorsHoverActive(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }
                      }
                  `}
              `
            : $inputBackground === "dark" &&
              css`
                  background-color: ${$isActive &&
                  ($validation === "not-passed"
                      ? THEME_DARK.DANGER_500
                      : THEME_DARK.PRIMARY_500)};
                  color: ${$isActive ? THEME_DARK.BACKGROUND : THEME_DARK.FONT};

                  ${!$readOnly &&
                  css`
                      @media ${BREAKPOINTS.HOVER} {
                          &:hover {
                              background-color: ${THEME_DARK.ColorsHoverHover(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                              color: ${THEME_DARK.BACKGROUND};
                          }

                          &:active {
                              background-color: ${THEME_DARK.ColorsHoverActive(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }
                      }
                  `}
              `}
`

setDefaultTheme([
    StyledInputContainer,
    Label,
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
