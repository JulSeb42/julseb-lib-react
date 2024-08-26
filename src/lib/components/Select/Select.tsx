/*=============================================== Select component ===============================================*/

import { forwardRef, useEffect, type MouseEvent } from "react"
import { useClickOutside } from "../../"
import {
    InputContainer,
    InputValidationIcon,
    InputRightContainer,
    InputButton,
    ListInput,
    ListInputItem,
    InputIcon,
    InputLeftContainer,
    InputPrefix,
    InputWrapper,
} from "../InputComponents"
import { CaretDown } from "../../icons"
import { SelectButton } from "./SelectButton"
import { useKeyboardNavigation } from "../ComponentsMixins"
import { SelectContainer } from "./styles"
import type { ILibSelect } from "./types"
import type { ILibSelectButton } from "./subtypes"

/**
 * @description Returns a Select component
 * @link https://documentation-components-react.vercel.app/components/select
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop value: string
 * @prop setValue: Dispatch<SetStateAction< string>>
 * @prop options?: Array<string>
 * @prop disabled?: boolean
 * @prop listDirection?: "up" | "down"
 * @prop tabIndex?: number
 * @prop prefix?: string | JSX.Element
 * @prop icons?: { left?: string | JSX.Element; caret?: string | JSX.Element }
 * @prop iconSizes?: { left?: number; caret?: number }
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 * @prop iconBaseUrl?: string
 * @prop inputBackground?: "light" | "dark"
 * @prop inputVariant?: "rounded" | "pill"
 * @prop containerStyle?: CSSProperties
 */
export const Select = forwardRef<HTMLDivElement, ILibSelect>(
    (
        {
            "data-testid": testid,
            className,
            as,
            id,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            inputVariant = "rounded",
            inputBackground,
            disabled,
            value,
            setValue,
            options,
            listDirection,
            icons,
            iconSizes,
            iconBaseUrl,
            tabIndex,
            prefix,
            containerStyle,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
            labelComment ||
            helper ||
            helperBottom ||
            validation
        )
        const hasOptions: boolean = !!(options && options.length > 1)
        const hasWrapper = !!(hasOptions || validation || icons?.left)

        const defaultIconSizes = {
            left: 16,
            caret: 16,
        }

        const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation({
            data: options || [],
            value: value,
            setValue: setValue,
        })

        useClickOutside(listRef, () => setIsOpen(false))

        const handleClick = (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            if (!isOpen && options && options.length > 1) setIsOpen(true)
        }

        useEffect(() => {
            setIsOpen(false)
        }, [value])

        const buttonProps: ILibSelectButton = {
            "data-testid": testid,
            className,
            value,
            id,
            tabIndex,
            disabled,
            icons,
            inputBackground,
            inputVariant,
            validation,
            options,
            isOpen,
            hasContainer,
            hasWrapper,
        }

        if (!hasContainer && !hasWrapper && !hasOptions)
            return <SelectButton {...buttonProps} />

        return (
            <InputContainer
                data-testid={testid}
                className={className}
                id={id}
                label={label}
                labelComment={labelComment}
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                value={undefined}
                counter={false}
                maxLength={undefined}
                style={containerStyle}
                hasListOpen={isOpen}
                iconBaseUrl={iconBaseUrl}
            >
                <SelectContainer
                    data-testid={
                        hasContainer ? `${testid}.SelectContainer` : testid
                    }
                    className={hasContainer ? "SelectContainer" : className}
                    ref={ref}
                    as={as}
                    onClick={handleClick}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                    {...rest}
                >
                    <InputWrapper
                        data-testid={testid}
                        className={className}
                        hasContainer={hasContainer}
                        hasListOpen={isOpen}
                        isTextArea={false}
                        inputVariant={inputVariant}
                        inputBackground={inputBackground}
                        validationStatus={validation?.status}
                    >
                        {(prefix || icons?.left) && (
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
                                    icon={icons?.left}
                                    iconSize={
                                        iconSizes?.left || defaultIconSizes.left
                                    }
                                    validationStatus={validation?.status}
                                    disabled={disabled}
                                    inputBackground={inputBackground}
                                    inputVariant={inputVariant}
                                    iconBaseUrl={iconBaseUrl}
                                />
                            </InputLeftContainer>
                        )}

                        <SelectButton {...buttonProps} />

                        {(hasOptions || validation) && (
                            <InputRightContainer
                                data-testid={testid}
                                className={className}
                                disabled={disabled}
                                withBorder={false}
                                withPadding
                            >
                                {validation && (
                                    <InputValidationIcon
                                        data-testid={testid}
                                        className={className}
                                        validation={validation}
                                        inputBackground={inputBackground}
                                    />
                                )}

                                {hasOptions && (
                                    <InputButton
                                        data-testid={testid}
                                        className={className}
                                        inputBackground={inputBackground}
                                        icon={
                                            icons?.caret || (
                                                <CaretDown
                                                    data-testid={
                                                        testid &&
                                                        `${testid}.Button.Caret`
                                                    }
                                                    className={
                                                        className && "Caret"
                                                    }
                                                    size={
                                                        iconSizes?.caret ||
                                                        defaultIconSizes.caret
                                                    }
                                                />
                                            )
                                        }
                                        iconSize={
                                            iconSizes?.caret ||
                                            defaultIconSizes.caret
                                        }
                                        disabled={disabled}
                                        aria-label="Caret down"
                                        validationStatus={validation?.status}
                                        iconBaseUrl={iconBaseUrl}
                                    />
                                )}
                            </InputRightContainer>
                        )}
                    </InputWrapper>

                    {options && options?.length > 1 && (
                        <ListInput
                            data-testid={testid}
                            className={className}
                            ref={listRef}
                            direction={listDirection}
                            inputBackground={inputBackground}
                            inputVariant={inputVariant}
                            validationStatus={validation?.status}
                            isOpen={isOpen}
                        >
                            {options.map((option, i) => (
                                <ListInputItem
                                    data-testid={testid}
                                    className={className}
                                    inputBackground={inputBackground}
                                    validationStatus={validation?.status}
                                    onClick={() => setValue(option)}
                                    isActive={value === option}
                                    isHovered={cursor === i && value !== option}
                                    key={`${option}-${i}`}
                                >
                                    {option}
                                </ListInputItem>
                            ))}
                        </ListInput>
                    )}
                </SelectContainer>
            </InputContainer>
        )
    }
)
