import { forwardRef } from "react"
import { StyledInput } from "../styles"
import type { ILibTextareaInput } from "../subtypes"

export const TextareaInput = forwardRef<HTMLTextAreaElement, ILibTextareaInput>(
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
        return (
            <StyledInput
                data-testid={testid && `${testid}.Textarea`}
                id={id}
                className={className && "Textarea"}
                ref={ref}
                disabled={disabled}
                as="textarea"
                maxLength={maxLength}
                $inputBackground={inputBackground}
                $inputVariant={undefined}
                $disabled={disabled}
                $validationStatus={validation?.status}
                $isTextarea
                {...rest}
            />
        )
    }
)
