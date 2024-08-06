/*=============================================== Select Button component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledSelectButton } from "./styles"
import type { ILibSelectButton } from "./subtypes"

export const SelectButton = forwardRef<HTMLButtonElement, ILibSelectButton>(
    (
        {
            "data-testid": testid,
            className,
            options,
            isOpen,
            id,
            tabIndex,
            disabled,
            icons,
            inputBackground,
            inputVariant,
            validation,
            selected,
            hasWrapper,
            hasContainer,
            onClick,
        },
        ref
    ) => {
        return (
            <StyledSelectButton
                data-testid={
                    (hasContainer || hasWrapper || icons?.iconLeft) && testid
                        ? `${testid}.SelectContainer.SelectButton`
                        : testid
                }
                ref={ref}
                className={classNames(
                    (hasContainer || hasWrapper || icons?.iconLeft) && className
                        ? "SelectButton"
                        : className,
                    { WithListOpen: isOpen }
                )}
                onClick={onClick}
                id={id}
                tabIndex={tabIndex}
                disabled={disabled}
                aria-disabled={disabled && "true"}
                $disabled={disabled}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $validation={validation?.status}
                $hasOptions={!!options}
            >
                {selected}
            </StyledSelectButton>
        )
    }
)
