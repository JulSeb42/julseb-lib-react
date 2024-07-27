/*=============================================== Select Button component ===============================================*/

import { useCallback, type MouseEventHandler } from "react"
import type {
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
    DispatchState,
} from "../../types"
import { StyledSelectButton } from "./styles"

export interface ILibSelectButton {
    "data-testid": string | undefined
    className: string | undefined
    selected: string
    onClick: MouseEventHandler<HTMLButtonElement>
    id: string | undefined
    tabIndex: number | undefined
    disabled: boolean | undefined
    hasIcon: boolean
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    validationStatus: LibValidationStatus
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    hasOptions: boolean
    hasContainer: boolean
    hasWrapper: boolean
}

export function SelectButton({
    "data-testid": testid,
    className,
    hasOptions,
    isOpen,
    setIsOpen,
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
}: ILibSelectButton) {
    const handleClickButton = useCallback(() => {
        if (hasOptions) setIsOpen(!isOpen)
    }, [hasOptions, isOpen, setIsOpen])

    return (
        <StyledSelectButton
            data-testid={
                (hasContainer || hasWrapper || hasIcon) && testid
                    ? `${testid}.SelectContainer.SelectButton`
                    : testid
            }
            className={
                (hasContainer || hasWrapper || hasIcon) && className
                    ? "SelectButton"
                    : className
            }
            onClick={handleClickButton}
            id={id}
            tabIndex={tabIndex}
            disabled={disabled}
            aria-disabled={disabled && "true"}
            $disabled={disabled}
            $hasIcon={hasIcon}
            $hasListOpen={isOpen}
            $inputBackground={inputBackground}
            $inputVariant={inputVariant}
            $validation={validationStatus}
            $hasOptions={hasOptions}
        >
            {selected}
        </StyledSelectButton>
    )
}
