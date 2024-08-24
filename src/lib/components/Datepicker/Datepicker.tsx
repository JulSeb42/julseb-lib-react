/*=============================================== Datepicker component ===============================================*/

import { forwardRef, useRef, useState, type ChangeEvent } from "react"
// import classNames from "classnames"
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
import {
    InputDate,
    // DatePickerContainer,  TextDate
} from "./styles"
import type { ILibDatepicker } from "./types"

/**
 * @description Returns a Datepicker component
 * @link https://documentation-components-react.vercel.app/components/datepicker
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 */
export const Datepicker = forwardRef<HTMLInputElement, ILibDatepicker>(
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
            inputAndListContainerStyle,
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
                                            className={
                                                className && "CalendarIcon"
                                            }
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
)
