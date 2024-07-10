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
import type { LibValidationStatus } from "../../types"
import type { LibInputCheckVariant } from "./types"

const CheckContainer = styled.span<{
    $validation: LibValidationStatus
    $disabled: boolean | undefined
}>`
    height: calc(${FONT_SIZES.BODY} * ${LINE_HEIGHTS.BODY});
    color: ${({ theme, $disabled, $validation }) =>
        $disabled
            ? theme.GRAY_500
            : $validation === "not-passed"
            ? theme.DANGER_500
            : theme.PRIMARY_500};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
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
    $validation: LibValidationStatus
}>`
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    ${Mixins.Flexbox({
        $gap: "xs",
        $inline: true,
    })}

    ${({ theme, $variant, $disabled, $validation }) =>
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
                              border-color: ${theme.ColorsHoverHover(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }

                          &:active {
                              border-color: ${theme.ColorsHoverActive(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }
                      }
                  `}
              `
            : $variant === "selector" &&
              css`
                  background-color: ${$disabled
                      ? theme.GRAY_50
                      : $validation === "not-passed"
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
                              background-color: ${theme.ColorsHoverHover(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
                              )};
                          }

                          &:active {
                              background-color: ${theme.ColorsHoverActive(
                                  $validation === "not-passed"
                                      ? "danger"
                                      : "primary"
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
            background-color: ${({ theme, $validation, $disabled }) =>
                $disabled
                    ? theme.GRAY_500
                    : $validation === "not-passed"
                    ? theme.DANGER_500
                    : theme.PRIMARY_500};

            & > * {
                opacity: 1;
            }
        }

        ${Toggle} {
            border-color: ${({ $validation, $disabled, theme }) =>
                $disabled
                    ? theme.GRAY_100
                    : $validation === "not-passed"
                    ? theme.DANGER_500
                    : theme.SUCCESS_500};
            background-color: ${({ $validation, $disabled, theme }) =>
                $disabled
                    ? theme.GRAY_100
                    : $validation === "not-passed"
                    ? theme.DANGER_500
                    : theme.SUCCESS_500};

            &:after {
                background-color: ${({ theme, $disabled }) =>
                    $disabled ? theme.GRAY_500 : theme.BACKGROUND};
                transform: translateX(8px);
            }
        }

        ${({ theme, $variant, $validation, $disabled }) =>
            $variant === "tile"
                ? css`
                      border-color: ${$disabled
                          ? theme.GRAY_500
                          : $validation === "not-passed"
                          ? theme.DANGER_500
                          : theme.PRIMARY_500};
                  `
                : $variant === "selector" &&
                  css`
                      background-color: ${$disabled
                          ? theme.GRAY_100
                          : $validation === "not-passed"
                          ? theme.DANGER_500
                          : theme.PRIMARY_500};
                      color: ${!$disabled && theme.BACKGROUND};

                      ${!$disabled &&
                      css`
                          @media ${BREAKPOINTS.HOVER} {
                              &:hover {
                                  background-color: ${theme.ColorsHoverHover(
                                      $validation === "not-passed"
                                          ? "danger"
                                          : "primary"
                                  )};
                              }

                              &:active {
                                  background-color: ${theme.ColorsHoverActive(
                                      $validation === "not-passed"
                                          ? "danger"
                                          : "primary"
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
