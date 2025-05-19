import { useCallback, useRef, type FC } from "react"
import { useMergeRefs } from "../../.."
import { Calendar } from "../../../icons"
import {
    InputRightContainer,
    InputButton,
    InputValidationIcon,
    InputIcon,
    InputLeftContainer,
    InputPrefix,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibDateInput } from "../subtypes"

export const DateInput: FC<ILibDateInput> = ({
    "data-testid": testid,
    ref,
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
    type,
    iconCalendarSize = 16,
    iconCalendar = (
        <Calendar
            data-testid={testid && `${testid}.Button.Icon`}
            className={className && "Icon"}
            size={iconCalendarSize}
        />
    ),
    prefix,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null as any)
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
                ref={useMergeRefs([inputRef, ref])}
                type={type}
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
                    icon={iconCalendar}
                    iconSize={iconCalendarSize}
                    onClick={showPicker}
                    aria-label="Calendar"
                    disabled={disabled}
                    inputBackground={inputBackground}
                    validationStatus={validation?.status}
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
