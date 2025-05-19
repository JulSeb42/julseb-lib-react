import type { FC } from "react"
import { InputRightContainer, InputValidationIcon } from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibFileInput } from "../subtypes"

export const FileInput: FC<ILibFileInput> = ({
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
    type = "file",
    ...rest
}) => {
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
