import { useEffect, type FC, type MouseEvent } from "react"
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
 * Select component for rendering a dropdown select input with customizable options, icons, validation, and styling.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Select props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.value - Current selected value.
 * @param {Dispatch<React.SetStateAction<string>>} props.setValue - Setter for the selected value.
 * @param {Array<string>} [props.options] - Array of selectable options.
 * @param {boolean} [props.disabled] - Disable the select input.
 * @param {"up" | "down"} [props.listDirection] - Direction of the dropdown list.
 * @param {number} [props.tabIndex] - Tab index for accessibility.
 * @param {string | JSX.Element} [props.prefix] - Prefix element or string.
 * @param {{ left?: string | JSX.Element; caret?: string | JSX.Element }} [props.icons] - Custom icons for left and caret.
 * @param {{ left?: number; caret?: number }} [props.iconSizes] - Icon sizes for left and caret icons.
 * @param {string} [props.label] - Label for the select input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the select input.
 * @param {string | { text?: string; element?: React.ReactNode; textColor?: string; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: string; iconSize?: number }} [props.helperBottom] - Helper text or element below the select input.
 * @param {{ status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }} [props.validation] - Validation status and message.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 * @param {"rounded" | "pill"} [props.inputVariant="rounded"] - Input variant style.
 * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Select component.
 *
 * @see https://documentation-components-react.vercel.app/components/select
 * @example
 * <Select
 *   value={selected}
 *   setValue={setSelected}
 *   options={["Option 1", "Option 2"]}
 *   label="Choose an option"
 * />
 */
export const Select: FC<ILibSelect> = ({
    "data-testid": testid,
    as,
    ref,
    className,
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
}) => {
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
                                                className={className && "Caret"}
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
