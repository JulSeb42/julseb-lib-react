import { type FC, type ForwardedRef } from "react"
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

const InputFunction: FC<ILibInput> = ({ type, ref, ...rest }) =>
    renderComponent(rest, type, ref)

/**
 * Input component for rendering various types of input fields, including text, select, textarea, date, file, password, search, color, and time, with flexible configuration and styling.
 *
 * @component
 * @extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
 * @param {Object} props - Input props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ForwardedRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.id] - Input id.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {number} [props.counter] - Character counter value.
 * @param {number} [props.maxLength] - Maximum length for the input value.
 * @param {string|number} [props.value] - Input value.
 * @param {string} [props.className] - Additional class names.
 * @param {"color" | "date" | "datetime-local" | "month" | "week" | "file" | "password" | "search" | "select" | "textarea" | "email" | "number" | "tel" | "text" | "url" | "time"} [props.type="text"] - Input type.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 * @param {"rounded" | "pill"} [props.inputVariant="rounded"] - Input variant style.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {any} [props.rest] - Additional props passed to the input.
 * @returns {JSX.Element} The rendered Input component.
 *
 * @see https://documentation-components-react.vercel.app/components/input
 * @example
 * <Input
 *   label="Email"
 *   type="email"
 *   helper="Enter your email address"
 *   validation={{ status: "success", message: "Looks good!" }}
 *   inputVariant="pill"
 * />
 */
export const Input: FC<ILibInput> = ({
    "data-testid": testid,
    ref,
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
    iconBaseUrl,
    containerStyle,
    ...rest
}) => {
    const hasContainer = !!(
        label ||
        labelComment ||
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
            iconBaseUrl={iconBaseUrl}
            style={containerStyle}
            hasListOpen={undefined}
        >
            <InputWrapper
                data-testid={testid}
                className={className}
                hasContainer={hasContainer}
                isTextArea={type === "textarea"}
                inputBackground={inputBackground}
                inputVariant={inputVariant}
                validationStatus={validation?.status}
                hasListOpen={false}
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
                    iconBaseUrl={iconBaseUrl}
                    {...(rest as any)}
                />
            </InputWrapper>
        </InputContainer>
    )
}
