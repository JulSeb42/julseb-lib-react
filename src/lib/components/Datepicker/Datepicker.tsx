/*=============================================== Datepicker component ===============================================*/

import { forwardRef, useRef, useState, type ChangeEvent } from "react"
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
 * @description Returns a Datepicker component
 * @link https://documentation-components-react.vercel.app/components/datepicker
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 * @prop value: string
 * @prop setValue: Dispatch<SetStateAction<string>>
 * @prop minDate?: string
 * @prop maxDate?: string
 * @prop texts?: { weekDays?: { mon?: string; tue?: string; wed?: string; etc. }; months?: { jan?: string; feb?: string; mar?: string; etc. } }
 * @prop icons?: { prev?: string | JSX.Element; next?: string | JSX.Element; calendar?: string | JSX.Element; left?: string | JSX.Element }
 * @prop iconsSizes?: { prev?: number; next?: number; calendar?: number; left?: number }
 * @prop iconsBaseUrl?: string
 * @prop calendarDirection?: "up" | "down"
 * @prop inputVariant?: "rounded" | "pill"
 * @prop disabled?: boolean
 * @prop tabIndex?: number
 * @prop prefix?: string | JSX.Element
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string => only if element is not defined; element: ReactChildren => only if text is not defined; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 * @prop iconBaseUrl?: string
 * @prop inputBackground?: "light" | "dark"
 * @prop inputVariant?: "rounded" | "pill"
 * @prop containerStyle?: CSSProperties
 * @prop inputAndListContainerStyle?: CSSProperties
 * @prop id?: string
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
