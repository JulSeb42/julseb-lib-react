/*=============================================== DateInput component ===============================================*/

import { forwardRef, useCallback, useRef } from "react"
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
import type { ILibDateInput } from "../types"

export const DateInput = forwardRef<HTMLInputElement, ILibDateInput>(
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
                    className={className && "Icon"}
                    size={iconCalendarSize}
                />
            ),
            validationIcon,
            prefix,
            ...rest
        },
        ref
    ) => {
        const inputRef = useRef<HTMLInputElement>(null)
        const showPicker = useCallback(
            () => inputRef?.current?.showPicker(),
            []
        )

        return (
            <>
                {(prefix || icon) && (
                    <InputLeftContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
                        withPadding={!!(!prefix && icon)}
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
                    $validation={validation?.status}
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
                            validationIcon={validationIcon}
                            inputBackground={inputBackground}
                        />
                    )}
                </InputRightContainer>
            </>
        )
    }
)
