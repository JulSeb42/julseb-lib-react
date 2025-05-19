import { useRef, type FC } from "react"
import { useMergeRefs } from "../../../hooks"
import { CaretDown } from "../../../icons"
import {
    InputButton,
    InputRightContainer,
    InputIcon,
    InputPrefix,
    InputLeftContainer,
} from "../../InputComponents"
import { StyledInput } from "../styles"
import type { ILibSelectInput } from "../subtypes"

export const SelectInput: FC<ILibSelectInput> = ({
    "data-testid": testid,
    ref,
    id,
    label,
    helper,
    helperBottom,
    validation,
    inputBackground,
    inputVariant = "rounded",
    className,
    disabled,
    children,
    iconSelectSize = 12,
    iconSelect = (
        <CaretDown
            data-testid={testid && `${testid}.Button.Icon`}
            className={className && "Icon"}
            size={iconSelectSize}
        />
    ),
    icon,
    iconSize,
    iconBaseUrl,
    prefix,
    ...rest
}) => {
    const inputRef = useRef<HTMLSelectElement>(null)

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
                        validationStatus={validation?.status}
                        disabled={disabled}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                        iconBaseUrl={iconBaseUrl}
                    />
                </InputLeftContainer>
            )}

            <StyledInput
                as="select"
                data-testid={testid && `${testid}.Select`}
                id={id}
                className={className && "Select"}
                ref={useMergeRefs([inputRef as any, ref as any]) as any}
                disabled={disabled}
                $inputBackground={inputBackground}
                $inputVariant={inputVariant}
                $disabled={disabled}
                $validationStatus={validation?.status}
                $isSelect
                {...rest}
            >
                {children}
            </StyledInput>

            <InputRightContainer
                data-testid={testid}
                className={className}
                disabled={disabled}
                withBorder={false}
                withPadding
            >
                <InputButton
                    data-testid={testid}
                    className={className}
                    aria-label="Caret"
                    disabled={disabled}
                    inputBackground={inputBackground}
                    icon={iconSelect}
                    iconSize={iconSelectSize}
                    iconBaseUrl={iconBaseUrl}
                    validationStatus={undefined}
                />
            </InputRightContainer>
        </>
    )
}
