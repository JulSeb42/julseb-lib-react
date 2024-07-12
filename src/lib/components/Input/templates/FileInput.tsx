/*=============================================== FileInput component ===============================================*/

import { forwardRef } from "react"
import {
    InputRightContainer,
    InputValidationIcon,
    InputWrapper,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibFileInput } from "../types"

const InputFn = forwardRef<
    HTMLInputElement,
    ILibFileInput & { hasContainer: boolean }
>(
    (
        {
            "data-testid": testid,
            className,
            id,
            disabled,
            inputBackground,
            inputVariant,
            validation,
            hasContainer,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInput
                data-testid={
                    hasContainer && testid ? `${testid}.Input` : testid
                }
                className={hasContainer && className ? "Input" : className}
                id={id}
                ref={ref}
                type="file"
                disabled={disabled}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $disabled={disabled}
                $hasIcon={false}
                $validation={validation?.status}
                {...rest}
            />
        )
    }
)

export const FileInput = forwardRef<HTMLInputElement, ILibFileInput>(
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

        const inputProps = {
            "data-testid": testid,
            className,
            id,
            disabled,
            inputBackground,
            inputVariant,
            validation,
            hasContainer,
            ref,
            ...rest,
        }

        if (validation)
            return (
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                >
                    <InputFn {...inputProps} />

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
                            inputBackground={inputBackground}
                            validationIcon={validationIcon}
                        />
                    </InputRightContainer>
                </InputWrapper>
            )

        return <InputFn {...inputProps} />
    }
)
