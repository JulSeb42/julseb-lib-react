/*=============================================== DateInput component ===============================================*/

import { forwardRef, useCallback, useRef } from "react"
import { useMergeRefs } from "../../.."
import { Calendar } from "../../../icons"
import {
    InputRightContainer,
    InputButton,
    InputValidationIcon,
    InputIcon,
    InputWrapper,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { DateInputProps } from "../types"

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
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
            type,
            iconCalendarSize = 16,
            iconCalendar = (
                <Calendar
                    data-testid={testid && `${testid}.Button.Icon`}
                    className={className && "Button__Icon"}
                    size={iconCalendarSize}
                />
            ),
            validationIcon,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
            helper ||
            helperBottom ||
            validation
        )

        const inputRef = useRef<HTMLInputElement>(null)
        const showPicker = useCallback(
            () => inputRef?.current?.showPicker(),
            []
        )

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
                    $hasIcon={!!icon}
                    $validation={validation?.status}
                    {...rest}
                />

                <InputRightContainer
                    data-testid={testid}
                    className={className}
                    inputVariant={inputVariant}
                    disabled={disabled}
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
                            validationIcon={validationIcon}
                            inputBackground={inputBackground}
                        />
                    )}
                </InputRightContainer>
            </InputWrapper>
        )
    }
)
