/*=============================================== Input component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"
import { ColorInput } from "./templates/ColorInput"
import { DateInput } from "./templates/DateInput"
import { FileInput } from "./templates/FileInput"
import { PasswordInput } from "./templates/PasswordInput"
import { SearchInput } from "./templates/SearchInput"
import { SelectInput } from "./templates/SelectInput"
import { TextareaInput } from "./templates/TextareaInput"
import { TextInput } from "./templates/TextInput"
import { TimeInput } from "./templates/TimeInput"
import type { ILibInput } from "./types"
import { InputContainer, InputWrapper } from "../InputComponents"
import type { LibInputType } from "../../types"

function renderComponent(
    props: any,
    type?: LibInputType,
    ref?: ForwardedRef<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
) {
    switch (type) {
        case "color":
            return <ColorInput type={type} ref={ref} {...props} />
        case "date":
        case "datetime-local":
        case "month":
        case "week":
            return <DateInput type={type} ref={ref} {...props} />
        case "file":
            return <FileInput type={type} ref={ref} {...props} />
        case "password":
            return <PasswordInput ref={ref} {...props} />
        case "search":
            return <SearchInput type={type} ref={ref} {...props} />
        case "select":
            return <SelectInput type={type} ref={ref} {...props} />
        case "textarea":
            return <TextareaInput type={type} ref={ref} {...props} />
        case "time":
            return <TimeInput type={type} ref={ref} {...props} />
        default:
            return <TextInput type={type} ref={ref} {...props} />
    }
}

const InputFunction = forwardRef<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    ILibInput
>(({ type, ...rest }, ref) => renderComponent(rest, type, ref))

/**
 * @description Returns a Input component
 * @link https://documentation-components-react.vercel.app/components/input
 * @extends HTMLInputElement
 * @constant => for all inputs
 * @prop data-testid?: string
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: LibAllColors; fontStyle?: FontStyle; icon?: string | JSX.Element; iconColor?: LibAllColors; iconSize?: number }
 * @prop validation?: { status: boolean | undefined; message: string; iconNotPassed?: string | JSX.Element; iconNotPassedSize?: number; iconPassed?: string | JSX.Element; iconPassedSize?: number }
 * @prop inputBackground?: LibInputBackground
 * @prop inputVariant?: LibInputVariant
 * @prop counter?: boolean
 * @prop maxLength?: number
 * @prop type?: "color" | "date" | "datetime-local" | "month" | "week" | "file" | "password" | "search" | "select" | "textarea" | "email" | "number" | "tel" | "text" | "url" | "time"
 * @prop validationIcon?: { iconValidationNotPassed?: string | JSX.Element; iconValidationNotPassedSize?: number; iconValidationPassed?: string | JSX.Element; iconValidationPassedSize?: number }
 *
 * @type for type `date` | `datetime-local` | `month` | `week` | `password` | `search` | `email` | `number` | `tel` | `text` | `url` | `time`
 * @prop icon?: string | JSX.Element
 * @prop iconSize?: number
 * @prop prefix?: string | JSX.Element
 *
 * @type for type `date` | `datetime-local` | `month` | `week`
 * @prop iconCalendar?: string | JSX.Element
 * @prop iconCalendarSize?: number
 *
 * @type for type `password`
 * @prop hideButton?: boolean
 * @prop button?: { iconShow: string | JSX.Element; iconShowSize?: number; iconHide: string | JSX.Element; iconHideSize?: number; textShow?: string; textHide?: string }
 *
 * @type for type `search`
 * @prop clearSearch?: MouseEventHandler<HTMLButtonElement>
 * @prop iconClear?: string | JSX.Element
 * @prop iconClearSize?: number
 * @prop focusKeys?: Array<string>
 * @prop showKeys?: boolean => only if `focusKeys` is defined
 *
 * @type for type `select`
 * @prop iconSelect?: string | JSX.Element
 * @prop iconSelectSize?: number
 * @prop children?: ReactChildren
 *
 * @type for type `time`
 * @prop iconClock?: string | JSX.Element
 * @prop iconClockSize?: number
 *
 * @type for type `email` | `number` | `tel` | `text` | `url`
 * @prop suffix?: string | JSX.Element
 */

export const Input = forwardRef<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    ILibInput
>(
    (
        {
            "data-testid": testid,
            id,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            counter,
            maxLength,
            value,
            className,
            type = "text",
            inputBackground,
            inputVariant = "rounded",
            ...rest
        },
        ref
    ) => {
        const hasContainer = !!(
            label ||
            helper ||
            helperBottom ||
            validation ||
            counter
        )

        return (
            <InputContainer
                data-testid={testid}
                id={id}
                label={label}
                labelComment={labelComment}
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                counter={counter}
                maxLength={maxLength}
                value={value}
                className={className}
            >
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                    isTextArea={type === "textarea"}
                    inputBackground={inputBackground}
                    inputVariant={inputVariant}
                    validationStatus={validation?.status}
                >
                    <InputFunction
                        data-testid={testid}
                        id={id}
                        ref={ref}
                        label={label}
                        helper={helper}
                        helperBottom={helperBottom}
                        validation={validation}
                        counter={counter}
                        maxLength={maxLength}
                        value={value}
                        className={className}
                        type={type}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                        {...(rest as any)}
                    />
                </InputWrapper>
            </InputContainer>
        )
    }
)
