import type { FC } from "react"
import classNames from "classnames"
import { StyledSelectButton } from "./styles"
import type { ILibSelectButton } from "./subtypes"

export const SelectButton: FC<ILibSelectButton> = ({
    "data-testid": testid,
    ref,
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
    value,
    hasWrapper,
    hasContainer,
    onClick,
}) => {
    return (
        <StyledSelectButton
            data-testid={
                (hasContainer || hasWrapper || icons?.left) && testid
                    ? `${testid}.SelectContainer.SelectButton`
                    : testid
            }
            ref={ref as any}
            className={classNames(
                (hasContainer || hasWrapper || icons?.left) && className
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
            $validationStatus={validation?.status}
            $hasOptions={!!options}
        >
            {value}
        </StyledSelectButton>
    )
}
