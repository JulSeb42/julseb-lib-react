import { forwardRef, useRef, useCallback } from "react"
import { Key, useKeyPress, useMergeRefs, useTouchScreen } from "../../.."
import {
    InputButton,
    InputIcon,
    InputPrefix,
    InputRightContainer,
    InputLeftContainer,
} from "../../InputComponents"
import { Close } from "../../../icons"
import { transformSearchKeys } from "../../../lib-utils"
import { StyledInput } from "../styles"
import type { ILibSearchInput } from "../subtypes"

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
            iconClearSize = 24,
            iconClear = (
                <Close
                    data-testid={testid && `${testid}.Button.Icon`}
                    className={className && "Icon"}
                    size={iconClearSize}
                />
            ),
            icon,
            iconSize,
            iconBaseUrl,
            focusKeys,
            showKeys,
            value,
            prefix,
            ...rest
        },
        ref
    ) => {
        const isTouchScreen = useTouchScreen()

        const inputRef = useRef<HTMLInputElement>(null)

        const handleFocus = useCallback(() => inputRef?.current?.focus(), [])

        const keys = focusKeys || [""]
        useKeyPress(keys, () => handleFocus())

        return (
            <>
                {(prefix || icon) && (
                    <InputLeftContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
                    >
                        <InputPrefix
                            data-testid={testid}
                            className={className}
                            prefix={prefix}
                            inputBackground={inputBackground}
                        />

                        <InputIcon
                            data-testid={testid}
                            className={className}
                            icon={icon}
                            iconSize={iconSize}
                            validationStatus={undefined}
                            disabled={disabled}
                            inputBackground={inputBackground}
                            inputVariant={inputVariant}
                            iconBaseUrl={iconBaseUrl}
                        />
                    </InputLeftContainer>
                )}

                <StyledInput
                    data-testid={testid && `${testid}.Input`}
                    id={id}
                    className={className && "Input"}
                    ref={useMergeRefs([ref, inputRef])}
                    disabled={disabled}
                    value={value}
                    prefix={undefined as any}
                    $inputBackground={inputBackground}
                    $inputVariant={inputVariant}
                    $disabled={disabled}
                    $validationStatus={undefined}
                    {...rest}
                />

                {(clearSearch || (showKeys && !isTouchScreen)) && (
                    <InputRightContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
                        withPadding
                        withBorder={false}
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
                                    iconBaseUrl={iconBaseUrl}
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
            </>
        )
    }
)
