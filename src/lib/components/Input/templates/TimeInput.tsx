import { useCallback, useRef, type FC } from "react"
import { useMergeRefs } from "../../.."
import {
    InputIcon,
    InputRightContainer,
    InputButton,
    InputValidationIcon,
    InputPrefix,
    InputLeftContainer,
} from "../../InputComponents"
import { Clock } from "../../../icons"
import { StyledInput } from "../styles"
import type { ILibTimeInput } from "../subtypes"

export const TimeInput: FC<ILibTimeInput> = ({
    "data-testid": testid,
    id,
    ref,
    label,
    helper,
    helperBottom,
    validation,
    inputBackground,
    inputVariant = "rounded",
    className,
    disabled,
    iconClockSize = 16,
    iconClock = (
        <Clock
            data-testid={testid && `${testid}.Button.Icon`}
            className={className && "Icon"}
            size={iconClockSize}
        />
    ),
    icon,
    iconSize,
    iconBaseUrl,
    prefix,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const showPicker = useCallback(() => inputRef?.current?.showPicker(), [])

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
                ref={useMergeRefs([ref, inputRef])}
                disabled={disabled}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $disabled={disabled}
                $validationStatus={validation?.status}
                {...rest}
            />

            <InputRightContainer
                data-testid={testid}
                className={className}
                disabled={disabled}
                withPadding
                withBorder={false}
            >
                <InputButton
                    data-testid={testid}
                    className={className}
                    icon={iconClock}
                    iconSize={iconClockSize}
                    inputBackground={inputBackground}
                    disabled={disabled}
                    aria-label="Clock"
                    onClick={showPicker}
                    validationStatus={validation?.status}
                    iconBaseUrl={iconBaseUrl}
                />

                {validation && (
                    <InputValidationIcon
                        data-testid={testid}
                        className={className}
                        validation={validation}
                        inputBackground={inputBackground}
                    />
                )}
            </InputRightContainer>
        </>
    )
}
