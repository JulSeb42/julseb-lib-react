/*=============================================== FileInput component ===============================================*/

import { forwardRef } from "react"
import { InputRightContainer, InputValidationIcon } from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibFileInput } from "../subtypes"

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
            type = "file",
            ...rest
        },
        ref
    ) => {
        return (
            <>
                <StyledInput
                    data-testid={testid && `${testid}.Input`}
                    className={className && "Input"}
                    id={id}
                    ref={ref}
                    type={type}
                    disabled={disabled}
                    $inputBackground={inputBackground}
                    $inputVariant={inputVariant}
                    $disabled={disabled}
                    $validationStatus={validation?.status}
                    {...rest}
                />

                {validation && (
                    <InputRightContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
                        withPadding
                        withBorder={false}
                    >
                        <InputValidationIcon
                            data-testid={testid}
                            className={className}
                            validation={validation}
                            inputBackground={inputBackground}
                        />
                    </InputRightContainer>
                )}
            </>
        )
    }
)
