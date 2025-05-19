import type { FC } from "react"
import {
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
    InputPrefix,
    InputSuffix,
    InputLeftContainer,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibTextInput } from "../subtypes"

export const TextInput: FC<ILibTextInput> = ({
    "data-testid": testid,
    ref,
    id,
    label,
    labelComment,
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
    iconBaseUrl,
    prefix,
    suffix,
    ...rest
}) => {
    return (
        <>
            {(prefix || icon) && (
                <InputLeftContainer
                    data-testid={testid}
                    className={className}
                    disabled={disabled}
                >
                    <InputPrefix
                        data-testid={testid}
                        className={className}
                        prefix={prefix}
                        inputBackground={inputBackground}
                    />

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
                </InputLeftContainer>
            )}

            <StyledInput
                data-testid={testid && `${testid}.Input`}
                id={id}
                className={className && "Input"}
                ref={ref}
                value={value}
                maxLength={maxLength}
                disabled={disabled}
                type={type}
                prefix={undefined as any}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $disabled={disabled}
                $validationStatus={validation?.status}
                {...rest}
            />

            {(validation || suffix) && (
                <InputRightContainer
                    data-testid={testid}
                    className={className}
                    disabled={disabled}
                    withPadding={validation && !suffix}
                    withBorder={!!(suffix && !validation)}
                >
                    {validation && (
                        <InputValidationIcon
                            data-testid={testid}
                            className={className}
                            validation={validation}
                            inputBackground={inputBackground}
                        />
                    )}

                    <InputSuffix
                        data-testid={testid}
                        className={className}
                        suffix={suffix}
                        inputBackground={inputBackground}
                    />
                </InputRightContainer>
            )}
        </>
    )
}
