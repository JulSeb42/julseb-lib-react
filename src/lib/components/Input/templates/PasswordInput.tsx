/*=============================================== PasswordInput component ===============================================*/

import { forwardRef, useState } from "react"
import { Hide, Show } from "../../../icons"
import {
    InputButton,
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
    InputPrefix,
    InputLeftContainer,
} from "../../InputComponents"
import type { ILibInputButton } from "../../InputComponents/types"
import { StyledInput } from "../styles"
import type { ILibPasswordInput } from "../subtypes"

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
            iconBaseUrl,
            validationIcon,
            counter,
            hideButton,
            type = "password",
            value,
            maxLength,
            button,
            prefix,
            ...rest
        },
        ref
    ) => {
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
            | "iconBaseUrl"
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
            iconBaseUrl,
        }

        return (
            <>
                {(prefix || icon) && (
                    <InputLeftContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
                        withPadding={!!(!prefix && icon)}
                    >
                        {prefix && (
                            <InputPrefix
                                data-testid={testid}
                                className={className}
                                prefix={prefix}
                                inputBackground={inputBackground}
                            />
                        )}

                        {icon && (
                            <InputIcon
                                data-testid={testid}
                                className={className}
                                icon={icon}
                                iconSize={iconSize}
                                validationStatus={validation?.status}
                                disabled={disabled}
                                inputBackground={inputBackground}
                                inputVariant={inputVariant}
                                iconBaseUrl={iconBaseUrl}
                            />
                        )}
                    </InputLeftContainer>
                )}

                <StyledInput
                    data-testid={testid && `${testid}.Input`}
                    ref={ref}
                    id={id}
                    className={className && "Input"}
                    type={hideButton ? type : inputType}
                    value={value}
                    maxLength={maxLength}
                    disabled={disabled}
                    prefix={undefined as any}
                    $inputVariant={inputVariant}
                    $inputBackground={inputBackground}
                    $disabled={disabled}
                    $validation={validation?.status}
                    {...rest}
                />

                {(!hideButton || validation) && (
                    <InputRightContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
                        withPadding
                        withBorder={false}
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
                                                          className && "Icon"
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
                                                          className && "Icon"
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
                                iconBaseUrl={iconBaseUrl}
                            />
                        )}
                    </InputRightContainer>
                )}
            </>
        )
    }
)
