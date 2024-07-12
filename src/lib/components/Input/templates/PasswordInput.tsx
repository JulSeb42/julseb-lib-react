/*=============================================== PasswordInput component ===============================================*/

import { forwardRef, useState } from "react"
import { Hide, Show } from "../../../icons"
import {
    InputButton,
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
    InputWrapper,
} from "../../InputComponents"
import type { ILibInputButton } from "../../InputComponents/types"
import { StyledInput } from "../styles"
import type { ILibPasswordInput } from "../types"

const Input = forwardRef<
    HTMLInputElement,
    ILibPasswordInput & {
        hasContainer: boolean
        hasWrapper: boolean
        inputType: "password" | "text"
    }
>(
    (
        {
            "data-testid": testid,
            hasContainer,
            hasWrapper,
            id,
            className,
            hideButton,
            type,
            inputType,
            value,
            maxLength,
            disabled,
            icon,
            validation,
            inputVariant,
            inputBackground,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInput
                data-testid={
                    (hasContainer || hasWrapper) && testid
                        ? `${testid}.Input`
                        : testid
                }
                ref={ref}
                id={id}
                className={
                    (hasContainer || hasWrapper) && className
                        ? "Input"
                        : className
                }
                type={hideButton ? type : inputType}
                value={value}
                maxLength={maxLength}
                disabled={disabled}
                $inputVariant={inputVariant}
                $inputBackground={inputBackground}
                $disabled={disabled}
                $hasIcon={!!icon}
                $validation={validation?.status}
                {...rest}
            />
        )
    }
)

export const PasswordInput = forwardRef<HTMLInputElement, ILibPasswordInput>(
    (
        {
            "data-testid": testid,
            id,
            label,
            helper,
            helperBottom,
            validation,
            inputBackground,
            inputVariant = "rounded",
            className,
            disabled,
            icon,
            iconSize,
            validationIcon,
            counter,
            hideButton,
            type = "password",
            value,
            maxLength,
            button,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
            helper ||
            helperBottom ||
            validation ||
            counter
        )
        const hasWrapper: boolean = !!(!hideButton || validation || icon)

        const [inputType, setInputType] = useState<"password" | "text">(
            "password"
        )

        const buttonCommonProps: Pick<
            ILibInputButton,
            | "data-testid"
            | "onClick"
            | "inputBackground"
            | "disabled"
            | "aria-label"
            | "validationStatus"
            | "className"
        > = {
            "data-testid": testid,
            onClick: () =>
                setInputType(inputType === "password" ? "text" : "password"),
            inputBackground,
            disabled,
            "aria-label": `${
                inputType === "password" ? "Show" : "Hide"
            } password`,
            validationStatus: validation?.status,
            className,
        }

        const inputProps = {
            "data-testid": testid,
            hasContainer,
            hasWrapper,
            id,
            className,
            hideButton,
            type,
            inputType,
            value,
            maxLength,
            disabled,
            icon,
            validation,
            inputVariant,
            inputBackground,
            ref,
            ...rest,
        }

        if (hasWrapper)
            return (
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                >
                    <InputIcon
                        data-testid={testid}
                        className={className}
                        icon={icon}
                        iconSize={iconSize}
                        validationStatus={validation?.status}
                        disabled={disabled}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                    />

                    <Input {...inputProps} />

                    {(!hideButton || validation) && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            inputVariant={inputVariant}
                            disabled={disabled}
                        >
                            {!hideButton &&
                                (button?.textShow && button?.textHide ? (
                                    <InputButton
                                        text={
                                            inputType === "password"
                                                ? button?.textShow
                                                : button?.textHide
                                        }
                                        {...buttonCommonProps}
                                    />
                                ) : (
                                    <InputButton
                                        icon={
                                            inputType === "password"
                                                ? button?.iconShow || (
                                                      <Hide
                                                          data-testid={
                                                              testid &&
                                                              `${testid}.Button.Icon`
                                                          }
                                                          className={
                                                              className &&
                                                              "Button__Icon"
                                                          }
                                                          size={
                                                              button?.iconShowSize ||
                                                              16
                                                          }
                                                      />
                                                  )
                                                : button?.iconHide || (
                                                      <Show
                                                          data-testid={
                                                              testid &&
                                                              `${testid}.Button.Icon`
                                                          }
                                                          className={
                                                              className &&
                                                              "Button__Icon"
                                                          }
                                                          size={
                                                              button?.iconHideSize ||
                                                              16
                                                          }
                                                      />
                                                  )
                                        }
                                        iconSize={
                                            inputType === "password"
                                                ? button?.iconShowSize || 16
                                                : button?.iconHideSize || 16
                                        }
                                        {...buttonCommonProps}
                                    />
                                ))}

                            {validation && (
                                <InputValidationIcon
                                    data-testid={testid}
                                    className={className}
                                    validation={validation}
                                    inputBackground={inputBackground}
                                    validationIcon={validationIcon}
                                />
                            )}
                        </InputRightContainer>
                    )}
                </InputWrapper>
            )

        return <Input {...inputProps} />
    }
)
