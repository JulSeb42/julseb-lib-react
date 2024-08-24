/*=============================================== InputCheck styles ===============================================*/

import styled, { css } from "styled-components"
import {
    BREAKPOINTS,
    FONT_SIZES,
    LINE_HEIGHTS,
    Mixins,
    RADIUSES,
    SPACERS,
    TRANSITIONS,
    setDefaultTheme,
} from "../../"
import type { LibValidationStatus, LibInputCheckVariant } from "../../types"

const CheckContainer = styled.span<{
    $validationStatus: LibValidationStatus
    $disabled: boolean | undefined
}>`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
    color: ${({ theme, $disabled, $validationStatus }) => {
        if ($disabled) return theme.GRAY_500
        if ($validationStatus === false) return theme.DANGER_500
        return theme.PRIMARY_500
    }}
`

const CHECK_SIZE = 16

const Radio = styled.span`
    width: ${CHECK_SIZE}px;
    height: ${CHECK_SIZE}px;
    border-radius: ${RADIUSES.CIRCLE};
    border: 2px solid currentColor;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: currentColor;
        border-radius: ${RADIUSES.CIRCLE};
        top: 2px;
        left: 2px;
        opacity: 0;
        transition: ${TRANSITIONS.SHORT};
    }
`

const Checkbox = styled.span`
    width: ${CHECK_SIZE}px;
    height: ${CHECK_SIZE}px;
    border: 2px solid currentColor;
    border-radius: ${RADIUSES.S};
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}

    & > * {
        opacity: 0;
        transition: ${TRANSITIONS.SHORT};
        color: ${({ theme }) => theme.BACKGROUND};
    }
`

const Toggle = styled.span`
    width: 24px;
    height: 16px;
    border: 2px solid currentColor;
    border-radius: ${RADIUSES.ROUND};
    position: relative;
    transition: ${TRANSITIONS.SHORT};

    &:after {
        content: "";
        width: 8px;
        height: 8px;
        background-color: currentColor;
        border-radius: ${RADIUSES.CIRCLE};
        position: absolute;
        top: 2px;
        left: 2px;
        transition: ${TRANSITIONS.SHORT};
    }
`

const StyledText = styled.span`
    font-size: ${FONT_SIZES.BODY};
    line-height: ${LINE_HEIGHTS.BODY};
`

const StyledInput = styled.input`
    display: none;
`

const StyledInputCheck = styled.label<{
    $variant: LibInputCheckVariant | undefined
    $disabled: boolean | undefined
    $validationStatus: LibValidationStatus
}>`
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    ${Mixins.Flexbox({
        $gap: "xxs",
        $inline: true,
    })}

    ${({ theme, $variant, $disabled, $validationStatus }) =>
        $variant === "tile"
            ? css`
                  width: 100%;
                  background-color: ${theme.BACKGROUND};
                  border: 1px solid ${theme.GRAY_200};
                  padding: ${SPACERS.S};
                  border-radius: ${RADIUSES.M};
                  transition: ${TRANSITIONS.SHORT};

                  ${!$disabled &&
                  css`
                      @media ${BREAKPOINTS.HOVER} {
                          &:hover {
                              border-color: ${Mixins.ColorsHoverHover(
                                  $validationStatus === false
                                      ? "danger"
                                      : "primary",
                                  theme
                              )};
                          }

                          &:active {
                              border-color: ${Mixins.ColorsHoverActive(
                                  $validationStatus === false
                                      ? "danger"
                                      : "primary",
                                  theme
                              )};
                          }
                      }
                  `}
              `
            : $variant === "selector" &&
              css`
                  background-color: ${$disabled
                      ? theme.GRAY_50
                      : $validationStatus === false
                      ? theme.DANGER_50
                      : theme.GRAY_100};
                  padding: ${SPACERS.XXS} ${SPACERS.M};
                  border-radius: ${RADIUSES.ROUND};
                  transition: ${TRANSITIONS.SHORT};
                  color: ${$disabled && theme.GRAY_500};

                  ${!$disabled &&
                  css`
                      @media ${BREAKPOINTS.HOVER} {
                          &:hover {
                              background-color: ${Mixins.ColorsHoverHover(
                                  $validationStatus === false
                                      ? "danger"
                                      : "primary",
                                  theme
                              )};
                          }

                          &:active {
                              background-color: ${Mixins.ColorsHoverActive(
                                  $validationStatus === false
                                      ? "danger"
                                      : "primary",
                                  theme
                              )};
                          }
                      }
                  `}
              `}

    &:has(input:checked) {
        ${Radio}:after {
            opacity: 1;
        }

        ${Checkbox} {
            background-color: ${({ theme, $validationStatus, $disabled }) =>
                $disabled
                    ? theme.GRAY_500
                    : $validationStatus === false
                    ? theme.DANGER_500
                    : theme.PRIMARY_500};

            & > * {
                opacity: 1;
            }
        }

        ${Toggle} {
            border-color: ${({ $validationStatus, $disabled, theme }) =>
                $disabled
                    ? theme.GRAY_100
                    : $validationStatus === false
                    ? theme.DANGER_500
                    : theme.SUCCESS_500};
            background-color: ${({ $validationStatus, $disabled, theme }) =>
                $disabled
                    ? theme.GRAY_100
                    : $validationStatus === false
                    ? theme.DANGER_500
                    : theme.SUCCESS_500};

            &:after {
                background-color: ${({ theme, $disabled }) =>
                    $disabled ? theme.GRAY_500 : theme.BACKGROUND};
                transform: translateX(8px);
            }
        }

        ${({ theme, $variant, $validationStatus, $disabled }) =>
            $variant === "tile"
                ? css`
                      border-color: ${$disabled
                          ? theme.GRAY_500
                          : $validationStatus === false
                          ? theme.DANGER_500
                          : theme.PRIMARY_500};
                  `
                : $variant === "selector" &&
                  css`
                      background-color: ${$disabled
                          ? theme.GRAY_100
                          : $validationStatus === false
                          ? theme.DANGER_500
                          : theme.PRIMARY_500};
                      color: ${!$disabled && theme.BACKGROUND};

                      ${!$disabled &&
                      css`
                          @media ${BREAKPOINTS.HOVER} {
                              &:hover {
                                  background-color: ${Mixins.ColorsHoverHover(
                                      $validationStatus === false
                                          ? "danger"
                                          : "primary",
                                      theme
                                  )};
                              }

                              &:active {
                                  background-color: ${Mixins.ColorsHoverActive(
                                      $validationStatus === false
                                          ? "danger"
                                          : "primary",
                                      theme
                                  )};
                              }
                          }
                      `}
                  `}
    }
`

setDefaultTheme([
    StyledInputCheck,
    CheckContainer,
    Radio,
    Checkbox,
    Toggle,
    StyledText,
    StyledInput,
])

export {
    StyledInputCheck,
    CheckContainer,
    Radio,
    Checkbox,
    Toggle,
    StyledText,
    StyledInput,
}
