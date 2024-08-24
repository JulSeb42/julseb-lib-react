/*=============================================== Timepicker component ===============================================*/

import { forwardRef, useRef, type ChangeEvent } from "react"
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
import { typeValues } from "../../types"
import { InputTime } from "./styles"
import type { ILibTimepicker } from "./types"

/**
 * @description Returns a Timepicker component
 * @link https://documentation-components-react.vercel.app/components/timepicker
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 */
export const Timepicker = forwardRef<HTMLInputElement, ILibTimepicker>(
    (
        {
            "data-testid": testid,
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

        const el = useRef<HTMLDivElement>(null)

        let times: Array<string> =
            step === "30min"
                ? Object.keys(typeValues.halfHours)
                : step === "15min"
                ? Object.keys(typeValues.quarterHours)
                : step === "1min"
                ? Object.keys(typeValues.minutes)
                : Object.keys(typeValues.hours)

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
            // @ts-ignore
            setValue,
        })

        const handleClick = () => {
            if (isOpen) setIsOpen(false)
            setIsOpen(true)
        }

        const handleOpen = () => setIsOpen(true)
        const handleClose = () => setIsOpen(false)

        const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value as any)

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
)
