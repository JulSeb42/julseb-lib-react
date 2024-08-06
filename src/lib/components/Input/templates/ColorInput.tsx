/*=============================================== ColorInput component ===============================================*/

import { forwardRef } from "react"
import { StyledInput } from "../styles"
import type { ILibColorInput } from "../subtypes"

export const ColorInput = forwardRef<HTMLInputElement, ILibColorInput>(
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
            type = "color",
            ...rest
        },
        ref
    ) => {
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
                $validation={validation?.status}
                {...rest}
            />
        )
    }
)
