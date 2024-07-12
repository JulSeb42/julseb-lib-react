/*=============================================== TextInput component ===============================================*/

import { forwardRef } from "react"
import {
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
    InputWrapper,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibTextInput } from "../types"

const Input = forwardRef<
    HTMLInputElement,
    ILibTextInput & { hasContainer: boolean; hasWrapper: boolean }
>(
    (
        {
            "data-testid": testid,
            hasContainer,
            hasWrapper,
            id,
            className,
            value,
            maxLength,
            disabled,
            type,
            inputBackground,
            inputVariant,
            icon,
            validation,
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
                id={id}
                className={
                    (hasContainer || hasWrapper) && className
                        ? "Input"
                        : className
                }
                ref={ref}
                value={value}
                maxLength={maxLength}
                disabled={disabled}
                type={type}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $disabled={disabled}
                $hasIcon={!!icon}
                $validation={validation?.status}
                {...rest}
            />
        )
    }
)

export const TextInput = forwardRef<HTMLInputElement, ILibTextInput>(
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
            value,
            maxLength,
            counter,
            type = "text",
            icon,
            iconSize,
            validationIcon,
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
        const hasWrapper = !!(icon || validation)

        const inputProps = {
            "data-testid": testid,
            hasContainer,
            hasWrapper,
            id,
            className,
            value,
            maxLength,
            disabled,
            type,
            inputBackground,
            inputVariant,
            icon,
            validation,
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

                    {validation && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            inputVariant={inputVariant}
                            disabled={disabled}
                        >
                            <InputValidationIcon
                                data-testid={testid}
                                className={className}
                                validation={validation}
                                validationIcon={validationIcon}
                                inputBackground={inputBackground}
                            />
                        </InputRightContainer>
                    )}
                </InputWrapper>
            )

        return <Input {...inputProps} />
    }
)
