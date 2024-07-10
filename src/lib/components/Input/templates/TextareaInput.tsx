/*=============================================== TextareaInput component ===============================================*/

import { forwardRef } from "react"
import { StyledInput } from "../styles"
import type { TextareaInputProps } from "../types"

export const TextareaInput = forwardRef<
    HTMLTextAreaElement,
    TextareaInputProps
>(
    (
        {
            "data-testid": testid,
            id,
            label,
            helper,
            helperBottom,
            validation,
            inputBackground,
            className,
            disabled,
            counter,
            maxLength,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
            helper ||
            helperBottom ||
            validation ||
            counter
        )

        return (
            <StyledInput
                data-testid={
                    hasContainer && testid ? `${testid}.Textarea` : testid
                }
                id={id}
                className={hasContainer && className ? "Textarea" : className}
                ref={ref}
                disabled={disabled}
                as="textarea"
                maxLength={maxLength}
                $inputBackground={inputBackground}
                $inputVariant={undefined}
                $disabled={disabled}
                $hasIcon={false}
                $validation={validation?.status}
                $isTextarea
                {...rest}
            />
        )
    }
)
