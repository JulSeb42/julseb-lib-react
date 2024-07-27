/*=============================================== TimeInput component ===============================================*/

import { forwardRef, useCallback, useRef } from "react"
import { useMergeRefs } from "../../.."
import {
    InputIcon,
    InputRightContainer,
    InputButton,
    InputValidationIcon,
    InputWrapper,
} from "../../InputComponents"
import { Clock } from "../../../icons"
import { StyledInput } from "../styles"
import type { ILibTimeInput } from "../types"

export const TimeInput = forwardRef<HTMLInputElement, ILibTimeInput>(
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
                    ref={useMergeRefs([ref, inputRef])}
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
                        icon={iconClock}
                        iconSize={iconClockSize}
                        inputBackground={inputBackground}
                        disabled={disabled}
                        aria-label="Clock"
                        onClick={showPicker}
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
