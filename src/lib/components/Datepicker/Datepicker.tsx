import { useRef, useState, type ChangeEvent, type FC } from "react"
import { convertDateShort } from "@julseb-lib/utils"
import { useClickOutside } from "../../"
import { Calendar as CalendarIcon } from "../../icons"
import {
    InputContainer,
    InputLeftContainer,
    InputPrefix,
    InputRightContainer,
    InputButton,
    InputValidationIcon,
    InputWrapper,
    InputIcon,
    InputAndListContainer,
} from "../InputComponents"
import { Calendar } from "./Calendar"
import { InputDate } from "./styles"
import type { ILibDatepicker } from "./types"

/**
 * Datepicker component for selecting dates with optional min/max, localization, and custom icons.
 *
 * @component
 * @param {Object} props - Datepicker props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {string} props.value - Current value of the date input.
 * @param {Dispatch<SetStateAction<string>>} props.setValue - Setter for the date value.
 * @param {string} [props.minDate] - Minimum selectable date (YYYY-MM-DD).
 * @param {string} [props.maxDate] - Maximum selectable date (YYYY-MM-DD).
 * @param {Object} [props.texts] - Localization texts for week days and months.
 * @param {Object} [props.icons] - Custom icons for navigation and calendar.
 * @param {Object} [props.iconsSizes] - Sizes for the icons.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"up" | "down"} [props.calendarDirection="down"] - Direction in which the calendar appears.
 * @param {"rounded" | "pill"} [props.inputVariant] - Input variant style.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 * @param {boolean} [props.disabled] - Disable the input.
 * @param {number} [props.tabIndex] - Tab index for the input.
 * @param {string|JSX.Element} [props.prefix] - Prefix element or string.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {CSSProperties} [props.containerStyle] - Style for the outer container.
 * @param {CSSProperties} [props.inputAndListContainerStyle] - Style for the input and list container.
 * @param {string} [props.id] - HTML id attribute.
 * @returns {JSX.Element} The rendered Datepicker component.
 *
 * @example
 * <Datepicker
 *   value={date}
 *   setValue={setDate}
 *   minDate="2024-01-01"
 *   maxDate="2024-12-31"
 *   label="Select a date"
 * />
 */
export const Datepicker: FC<ILibDatepicker> = ({
    "data-testid": testid,
    ref,
    className,
    minDate,
    maxDate,
    texts,
    value,
    setValue,
    icons,
    iconsSizes,
    iconBaseUrl,
    calendarDirection = "down",
    inputVariant,
    inputBackground,
    disabled,
    tabIndex,
    id,
    label,
    labelComment,
    helper,
    helperBottom,
    validation,
    containerStyle,
    inputAndListContainerStyle,
    prefix,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const el = useRef<HTMLDivElement>(null as any)
    const handleClickOutside = () => setIsOpen(false)
    useClickOutside(el, handleClickOutside)

    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )

    const handleOpen = () => {
        if (!disabled) setIsOpen(true)
        else return
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)

    return (
        <InputContainer
            data-testid={testid}
            id={id}
            label={label}
            labelComment={labelComment}
            helper={helper}
            helperBottom={helperBottom}
            validation={validation}
            value={value}
            className={className}
            iconBaseUrl={iconBaseUrl}
            style={containerStyle}
            hasListOpen={isOpen}
            counter={undefined}
            maxLength={undefined}
        >
            <InputAndListContainer
                data-testid={testid}
                className={className}
                hasListOpen={isOpen}
                isParent={!hasContainer}
                ref={el}
                inputAndListContainerStyle={inputAndListContainerStyle}
            >
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    isTextArea={false}
                    inputBackground={inputBackground}
                    inputVariant={inputVariant}
                    validationStatus={validation?.status}
                    hasListOpen={isOpen}
                    hasContainer
                >
                    {(icons?.left || prefix) && (
                        <InputLeftContainer
                            data-testid={testid}
                            className={className}
                            disabled={disabled}
                        >
                            {prefix && (
                                <InputPrefix
                                    data-testid={testid}
                                    className={className}
                                    prefix={prefix}
                                    inputBackground={inputBackground}
                                />
                            )}

                            {icons?.left && (
                                <InputIcon
                                    data-testid={testid}
                                    className={className}
                                    icon={icons.left}
                                    iconSize={iconsSizes?.left}
                                    validationStatus={validation?.status}
                                    disabled={disabled}
                                    inputBackground={inputBackground}
                                    inputVariant={inputVariant}
                                    iconBaseUrl={iconBaseUrl}
                                />
                            )}
                        </InputLeftContainer>
                    )}

                    <InputDate
                        data-testid={
                            testid && `${testid}.InputWrapper.InputDate`
                        }
                        className={className && "InputDate"}
                        ref={ref}
                        onClick={handleOpen}
                        onFocus={handleOpen}
                        tabIndex={tabIndex}
                        value={convertDateShort(value)}
                        onChange={handleChange}
                        disabled={disabled}
                        $inputVariant={inputVariant}
                        $validationStatus={validation?.status}
                        $inputBackground={inputBackground}
                        $disabled={disabled}
                        {...rest}
                    />

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
                            icon={
                                icons?.calendar ?? (
                                    <CalendarIcon
                                        data-testid={
                                            testid &&
                                            `${testid}.InputWrapper.InputRightContainer.Button.CalendarIcon`
                                        }
                                        className={className && "CalendarIcon"}
                                        size={iconsSizes?.calendar ?? 16}
                                    />
                                )
                            }
                            iconSize={iconsSizes?.calendar}
                            onClick={handleOpen}
                            aria-label="Calendar"
                            disabled={disabled}
                            inputBackground={inputBackground}
                            validationStatus={validation?.status}
                        />

                        {validation && (
                            <InputValidationIcon
                                data-testid={testid}
                                className={className}
                                validation={validation}
                                inputBackground={inputBackground}
                            />
                        )}
                    </InputRightContainer>
                </InputWrapper>

                <Calendar
                    data-testid={testid}
                    className={className}
                    value={value}
                    setValue={setValue}
                    minDate={minDate}
                    maxDate={maxDate}
                    texts={texts}
                    icons={icons}
                    iconsSizes={iconsSizes}
                    iconBaseUrl={iconBaseUrl}
                    calendarDirection={calendarDirection}
                    validation={validation}
                    inputBackground={inputBackground}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </InputAndListContainer>
        </InputContainer>
    )
}
