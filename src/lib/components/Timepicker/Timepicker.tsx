import { useRef, type ChangeEvent, type FC } from "react"
import { useClickOutside } from "../../"
import {
    InputContainer,
    InputAndListContainer,
    InputWrapper,
    InputLeftContainer,
    InputPrefix,
    InputIcon,
    InputRightContainer,
    InputButton,
    InputValidationIcon,
    ListInput,
    ListInputItem,
} from "../InputComponents"
import { Clock } from "../../icons"
import { useKeyboardNavigation } from "../ComponentsMixins"
import { designTokens } from "../../types"
import { InputTime } from "./styles"
import type { ILibTimepicker } from "./types"

/**
 * Timepicker component for selecting a time value with customizable steps, icons, validation, and styling.
 *
 * @component
 * @extends HTMLInputElement
 * @param {Object} props - Timepicker props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ForwardedRef<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {string} [props.className] - Additional class names.
 * @param {string | JSX.Element} [props.icon] - Custom icon to display on the left.
 * @param {number} [props.iconSize] - Size of the left icon.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {string | JSX.Element} [props.iconClock] - Clock icon to display on the right.
 * @param {number} [props.iconClockSize=16] - Size of the clock icon.
 * @param {string} [props.id] - ID for the input element.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string | { text?: string; element?: React.ReactNode; textColor?: string; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: string; iconSize?: number }} [props.helperBottom] - Helper text or element below the input.
 * @param {{ status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }} [props.validation] - Validation status and message.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 * @param {"rounded" | "pill"} [props.inputVariant] - Input variant style.
 * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {CSSProperties} [props.inputAndListContainerStyle] - Style for the input and list container.
 * @param {"up" | "down"} [props.listDirection] - Direction of the dropdown list.
 * @param {"1h" | "30min" | "15min" | "1min"} [props.step="1h"] - Step interval for time options.
 * @param {LibTimepickerHours | LibTimepickerHalfTimes | LibTimepickerQuarterTimes | LibTimepickerMinutes} [props.minTime] - Minimum selectable time.
 * @param {LibTimepickerHours | LibTimepickerHalfTimes | LibTimepickerQuarterTimes | LibTimepickerMinutes} [props.maxTime] - Maximum selectable time.
 * @param {LibTimepickerHours | LibTimepickerHalfTimes | LibTimepickerQuarterTimes | LibTimepickerMinutes} props.value - Current selected time value.
 * @param {Dispatch<React.SetStateAction<LibTimepickerHours | LibTimepickerHalfTimes | LibTimepickerQuarterTimes | LibTimepickerMinutes>>} props.setValue - Setter for the selected time value.
 * @param {string | JSX.Element} [props.prefix] - Prefix element or string.
 * @param {boolean} [props.disabled] - Disable the input.
 * @param {number} [props.tabIndex] - Tab index for accessibility.
 * @param {any} [props.rest] - Additional props passed to the input element.
 * @returns {JSX.Element} The rendered Timepicker component.
 *
 * @see https://documentation-components-react.vercel.app/components/timepicker
 * @example
 * <Timepicker
 *   value={time}
 *   setValue={setTime}
 *   label="Select time"
 *   step="30min"
 * />
 */
export const Timepicker: FC<ILibTimepicker> = ({
    "data-testid": testid,
    ref,
    className,
    icon,
    iconSize,
    iconBaseUrl,
    iconClockSize = 16,
    iconClock = (
        <Clock
            data-testid={testid && `${testid}.RightContainer.IconClock`}
            className={className && "IconClock"}
            size={iconClockSize}
        />
    ),
    id,
    label,
    labelComment,
    helper,
    helperBottom,
    validation,
    inputBackground,
    inputVariant,
    containerStyle,
    inputAndListContainerStyle,
    listDirection,
    step = "1h",
    minTime,
    maxTime,
    value,
    setValue,
    prefix,
    disabled,
    tabIndex,
    ...rest
}) => {
    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )

    const el = useRef<HTMLDivElement>(null)

    let times: Array<string> =
        step === "30min"
            ? Object.keys(designTokens.halfHours)
            : step === "15min"
            ? Object.keys(designTokens.quarterHours)
            : step === "1min"
            ? Object.keys(designTokens.minutes)
            : Object.keys(designTokens.hours)

    if (minTime) {
        times = times.splice(
            times.indexOf(times.find(found => found === minTime)!),
            times.length - 1
        )
    }

    if (maxTime) {
        times = times.splice(0, times.indexOf(maxTime) + 1)
    }

    const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation<
        typeof times
    >({
        data: times,
        value,
        setValue,
    })

    const handleClick = () => {
        if (isOpen) setIsOpen(false)
        setIsOpen(true)
    }

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(
            e.target.value as keyof typeof designTokens.hours &
                keyof typeof designTokens.halfHours &
                keyof typeof designTokens.quarterHours &
                keyof typeof designTokens.minutes
        )

    const handleSelectTime = (time: string) => {
        setValue(time as any)
        handleClose()
    }

    useClickOutside(listRef, handleClose)

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
                    {(icon || prefix) && (
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

                            {icon && (
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
                            )}
                        </InputLeftContainer>
                    )}

                    <InputTime
                        data-testid={
                            testid && `${testid}.InputWrapper.InputTime`
                        }
                        className={className && "InputTime"}
                        ref={ref}
                        onClick={handleClick}
                        onFocus={handleOpen}
                        tabIndex={tabIndex}
                        value={value}
                        onChange={handleChange}
                        disabled={disabled}
                        $disabled={disabled}
                        $validationStatus={validation?.status}
                        $inputBackground={inputBackground}
                        $inputVariant={inputVariant}
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
                            icon={iconClock}
                            iconSize={iconClockSize}
                            onClick={handleClick}
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

                <ListInput
                    data-testid={testid}
                    className={className}
                    direction={listDirection}
                    inputBackground={inputBackground}
                    inputVariant={inputVariant}
                    validationStatus={validation?.status}
                    isOpen={!!(value && isOpen)}
                    ref={listRef}
                >
                    {times.map((time, i) => (
                        <ListInputItem
                            key={time}
                            data-testid={testid}
                            className={className}
                            validationStatus={validation?.status}
                            inputBackground={inputBackground}
                            onClick={() => handleSelectTime(time)}
                            isActive={i === cursor}
                            isHovered={value === time}
                        >
                            {time}
                        </ListInputItem>
                    ))}
                </ListInput>
            </InputAndListContainer>
        </InputContainer>
    )
}
