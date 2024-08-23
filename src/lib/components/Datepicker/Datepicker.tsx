/*=============================================== Datepicker component ===============================================*/

import { forwardRef, useRef, useState } from "react"
import classNames from "classnames"
import { convertDateShort } from "ts-utils-julseb"
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
import { DatePickerContainer, SelectedDate, TextDate } from "./styles"
import type { ILibDatepicker } from "./types"

/**
 * @description Returns a Datepicker component
 * @link https://documentation-components-react.vercel.app/components/datepicker
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Datepicker = forwardRef<HTMLDivElement, ILibDatepicker>(
    (
        {
            "data-testid": testid,
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
            prefix,
            ...rest
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false)
        const el = useRef<HTMLDivElement>(null)
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
            >
                <InputAndListContainer
                    data-testid={testid}
                    className={className}
                    hasListOpen={isOpen}
                    isParent={!hasContainer}
                    ref={el}
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
                        <DatePickerContainer
                            data-testid={
                                testid && `${testid}.DatePickerContainer`
                            }
                            className={classNames(
                                { Open: isOpen },
                                { DatePickerContainer: className },
                                { Disabled: disabled }
                            )}
                            ref={ref}
                            $inputBackground={inputBackground}
                            {...rest}
                        >
                            <SelectedDate
                                data-testid={
                                    testid &&
                                    `${testid}.DatePickerContainer.SelectedDate`
                                }
                                className={className && "SelectedDate"}
                                onClick={handleOpen}
                                onFocus={handleOpen}
                                tabIndex={tabIndex}
                                $inputVariant={inputVariant}
                                $validationStatus={validation?.status}
                                $inputBackground={inputBackground}
                                $disabled={disabled}
                                $withIconLeft={!!icons?.left || !!prefix}
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
                                                inputBackground={
                                                    inputBackground
                                                }
                                            />
                                        )}

                                        {icons?.left && (
                                            <InputIcon
                                                data-testid={testid}
                                                className={className}
                                                icon={icons.left}
                                                iconSize={iconsSizes?.left}
                                                validationStatus={
                                                    validation?.status
                                                }
                                                disabled={disabled}
                                                inputBackground={
                                                    inputBackground
                                                }
                                                inputVariant={inputVariant}
                                                iconBaseUrl={iconBaseUrl}
                                            />
                                        )}
                                    </InputLeftContainer>
                                )}

                                <TextDate
                                    data-testid={
                                        testid &&
                                        `${testid}.DatePickerContainer.SelectedDate.Text`
                                    }
                                    className={className && "TextDate"}
                                    $withIconLeft={!!icons?.left || !!prefix}
                                >
                                    {convertDateShort(value)}
                                </TextDate>

                                <InputRightContainer
                                    data-testid={testid}
                                    className={className}
                                    disabled={disabled}
                                    withPadding={!!validation}
                                    withBorder={false}
                                >
                                    <InputButton
                                        data-testid={testid}
                                        className={className}
                                        icon={
                                            icons?.calendar ?? (
                                                <CalendarIcon
                                                    data-testid={
                                                        testid &&
                                                        `${testid}.DatePickerContainer.SelectedDate.InputRightContainer.Button.CalendarIcon`
                                                    }
                                                    className={
                                                        className &&
                                                        "CalendarIcon"
                                                    }
                                                    size={
                                                        iconsSizes?.calendar ??
                                                        16
                                                    }
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
                            </SelectedDate>
                        </DatePickerContainer>
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
)
