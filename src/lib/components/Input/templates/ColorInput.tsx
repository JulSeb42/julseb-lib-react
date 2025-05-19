import type { FC } from "react"
import { StyledInput } from "../styles"
import type { ILibColorInput } from "../subtypes"

export const ColorInput: FC<ILibColorInput> = ({
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
    type = "color",
    ...rest
}) => {
    return (
        <StyledInput
            data-testid={testid && `${testid}.Input`}
            className={className && "Input"}
            id={id}
            ref={ref}
            type={type}
            $inputBackground={inputBackground}
            $inputVariant={inputVariant}
            $disabled={disabled}
            $validationStatus={validation?.status}
            {...rest}
        />
    )
}
