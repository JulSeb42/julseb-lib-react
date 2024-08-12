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
 * @prop selected: string
 * @prop setSelected: Dispatch<SetStateAction< string>>
 * @prop options?: Array<string>
 * @prop disabled?: boolean
 * @prop listDirection?: "up" | "down"
 * @prop tabIndex?: number
 * @prop icons?: { iconLeft?: string | JSX.Element caret?: string | JSX.Element }
 * @prop iconSizes?: { iconLeft?: number caret?: number }
 * @prop validationIcon?: { iconValidationNotPassed?: string | JSX.Element; iconValidationNotPassedSize?: number; iconValidationPassed?: string | JSX.Element; iconValidationPassedSize?: number }
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number }
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
            validationIcon,
            inputVariant = "rounded",
            inputBackground,
            disabled,
            selected,
            setSelected,
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
        const hasWrapper = !!(hasOptions || validation || icons?.iconLeft)

        const defaultIconSizes = {
            left: 16,
            caret: 16,
        }

        const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation({
            data: options || [],
            value: selected,
            setValue: setSelected,
        })

        useClickOutside(listRef, () => setIsOpen(false))

        const handleClick = (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            if (!isOpen && options && options.length > 1) setIsOpen(true)
        }

        useEffect(() => {
            setIsOpen(false)
        }, [selected])

        const buttonProps: ILibSelectButton = {
            "data-testid": testid,
            className,
            selected,
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
                        {(prefix || icons?.iconLeft) && (
                            <InputLeftContainer
                                data-testid={testid}
                                className={className}
                                disabled={disabled}
                                withPadding={!!(!prefix && icons?.iconLeft)}
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
                                    icon={icons?.iconLeft}
                                    iconSize={
                                        iconSizes?.iconLeft ||
                                        defaultIconSizes.left
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
                                        validationIcon={validationIcon}
                                        inputBackground={inputBackground}
                                        iconBaseUrl={iconBaseUrl}
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
                            validation={validation?.status}
                            isOpen={isOpen}
                        >
                            {options.map((option, i) => (
                                <ListInputItem
                                    data-testid={testid}
                                    className={className}
                                    inputBackground={inputBackground}
                                    validation={validation?.status}
                                    onClick={() => setSelected(option)}
                                    isActive={selected === option}
                                    isHovered={
                                        cursor === i && selected !== option
                                    }
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
