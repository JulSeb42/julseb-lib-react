/*=============================================== SelectInput component ===============================================*/

import { forwardRef, useRef } from "react"
import { useMergeRefs } from "../../../hooks"
import { CaretDown } from "../../../icons"
import {
    InputButton,
    InputRightContainer,
    InputWrapper,
    InputIcon,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { SelectInputProps } from "../types"

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
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
            children,
            iconSelectSize = 12,
            iconSelect = (
                <CaretDown
                    data-testid={testid && `${testid}.Button.Icon`}
                    className={className && "Button__Icon"}
                    size={iconSelectSize}
                />
            ),
            icon,
            iconSize,
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

        const inputRef = useRef<HTMLSelectElement>(null)
        const allRefs = useMergeRefs([inputRef, ref])

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
                    data-testid={testid && `${testid}.Select`}
                    id={id}
                    className={className && "Select"}
                    ref={allRefs}
                    disabled={disabled}
                    as="select"
                    $inputBackground={inputBackground}
                    $inputVariant={inputVariant}
                    $disabled={disabled}
                    $hasIcon={!!icon}
                    $validation={validation?.status}
                    $isSelect
                    {...rest}
                >
                    {children}
                </StyledInput>

                <InputRightContainer
                    data-testid={testid}
                    className={className}
                    inputVariant={inputVariant}
                    disabled={disabled}
                >
                    <InputButton
                        data-testid={testid}
                        className={className}
                        aria-label="Caret"
                        disabled={disabled}
                        inputBackground={inputBackground}
                        icon={iconSelect}
                        iconSize={iconSelectSize}
                        validationStatus={undefined}
                    />
                </InputRightContainer>
            </InputWrapper>
        )
    }
)
