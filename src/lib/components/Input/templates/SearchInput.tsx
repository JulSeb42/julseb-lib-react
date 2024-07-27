/*=============================================== SearchInput component ===============================================*/

import { forwardRef, useRef, type ForwardedRef, useCallback } from "react"
import { Key, useKeyPress, useMergeRefs, useTouchScreen } from "../../.."
import {
    InputButton,
    InputIcon,
    InputRightContainer,
    InputWrapper,
} from "../../InputComponents"
import { Close } from "../../../icons"
import { transformSearchKeys } from "../../../lib-utils"
import { StyledInput } from "../styles"
import type { ILibSearchInput } from "../types"

const Input = forwardRef<
    HTMLInputElement,
    ILibSearchInput & {
        hasContainer: boolean
        hasWrapper: boolean
        inputRef: ForwardedRef<HTMLInputElement>
    }
>(
    (
        {
            "data-testid": testid,
            hasContainer,
            hasWrapper,
            className,
            id,
            inputRef,
            disabled,
            value,
            inputBackground,
            inputVariant,
            icon,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInput
                data-testid={
                    (hasContainer || hasWrapper) && testid
                        ? `${testid}.Input`
                        : testid
                }
                id={id}
                className={
                    (hasContainer || hasWrapper) && className
                        ? "Input"
                        : className
                }
                ref={useMergeRefs([ref, inputRef])}
                disabled={disabled}
                value={value}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $disabled={disabled}
                $hasIcon={!!icon}
                $validation={undefined}
                {...rest}
            />
        )
    }
)

export const SearchInput = forwardRef<HTMLInputElement, ILibSearchInput>(
    (
        {
            "data-testid": testid,
            id,
            label,
            helper,
            helperBottom,
            inputBackground,
            inputVariant = "rounded",
            className,
            disabled,
            clearSearch,
            iconClearSize = 16,
            iconClear = (
                <Close
                    data-testid={testid && `${testid}.Button.Icon`}
                    className={className && "Icon"}
                    size={iconClearSize}
                />
            ),
            icon,
            iconSize,
            focusKeys,
            showKeys,
            value,
            ...rest
        },
        ref
    ) => {
        const isTouchScreen = useTouchScreen()

        const hasContainer: boolean = !!(label || helper || helperBottom)
        const hasWrapper: boolean = !!(
            clearSearch ||
            icon ||
            (showKeys && !isTouchScreen)
        )

        const inputRef = useRef<HTMLInputElement>(null)

        const handleFocus = useCallback(() => inputRef?.current?.focus(), [])

        const keys = focusKeys || [""]
        useKeyPress(keys, () => handleFocus())

        const inputProps = {
            "data-testid": testid,
            hasContainer,
            hasWrapper,
            className,
            id,
            inputRef,
            ref,
            disabled,
            value,
            inputBackground,
            inputVariant,
            icon,
            ...rest,
        }

        if (hasWrapper)
            return (
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                >
                    <InputIcon
                        data-testid={testid}
                        className={className}
                        icon={icon}
                        iconSize={iconSize}
                        validationStatus={undefined}
                        disabled={disabled}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                    />

                    <Input {...inputProps} />

                    {(clearSearch || (showKeys && !isTouchScreen)) && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            disabled={disabled}
                            inputVariant={inputVariant}
                        >
                            {clearSearch &&
                                value &&
                                value.toString().length > 0 && (
                                    <InputButton
                                        data-testid={testid}
                                        className={className}
                                        icon={iconClear}
                                        iconSize={iconClearSize}
                                        inputBackground={inputBackground}
                                        disabled={disabled}
                                        aria-label="Clear"
                                        onClick={clearSearch}
                                        validationStatus={undefined}
                                    />
                                )}

                            {showKeys && !isTouchScreen && (
                                <Key
                                    data-testid={testid && `${testid}.Keys`}
                                    keys={transformSearchKeys(keys)}
                                    accentColor="primary"
                                    className={className && "Keys"}
                                />
                            )}
                        </InputRightContainer>
                    )}
                </InputWrapper>
            )

        return <Input {...inputProps} />
    }
)
