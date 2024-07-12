/*=============================================== ColorInput component ===============================================*/

import { forwardRef } from "react"
import { StyledInput } from "../styles"
import type { ILibColorInput } from "../types"

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

        return (
            <StyledInput
                data-testid={hasContainer ? `${testid}.Input` : testid}
                id={id}
                className={hasContainer ? "Input" : className}
                ref={ref}
                type="color"
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
