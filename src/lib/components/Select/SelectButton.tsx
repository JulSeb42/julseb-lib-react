/*=============================================== Select Button component ===============================================*/

import { forwardRef, type MouseEventHandler } from "react"
import classNames from "classnames"
import type {
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
} from "../../types"
import { StyledSelectButton } from "./styles"

export interface ILibSelectButton {
    "data-testid": string | undefined
    className: string | undefined
    selected: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    id: string | undefined
    tabIndex: number | undefined
    disabled: boolean | undefined
    hasIcon: boolean
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    validationStatus: LibValidationStatus
    isOpen: boolean
    hasOptions: boolean
    hasContainer: boolean
    hasWrapper: boolean
}

export const SelectButton = forwardRef<HTMLButtonElement, ILibSelectButton>(({
    "data-testid": testid,
    className,
    hasOptions,
    isOpen,
    id,
    tabIndex,
    disabled,
    hasIcon,
    inputBackground,
    inputVariant,
    validationStatus,
    selected,
    hasWrapper,
    hasContainer,
    onClick,
}: ILibSelectButton) => {
    return (
        <StyledSelectButton
            data-testid={
                (hasContainer || hasWrapper || hasIcon) && testid
                    ? `${testid}.SelectContainer.SelectButton`
                    : testid
            }
            className={classNames(
                (hasContainer || hasWrapper || hasIcon) && className
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
            $hasIcon={hasIcon}
            $inputBackground={inputBackground}
            $inputVariant={inputVariant}
            $validation={validationStatus}
            $hasOptions={hasOptions}
        >
            {selected}
        </StyledSelectButton>
    )
}
)