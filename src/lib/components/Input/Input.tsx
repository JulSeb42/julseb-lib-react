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
import { InputContainer } from "../InputComponents"
import type { LibInputType } from "../../types"

/**
 * @description Returns a Input component
 * @link https://documentation-components-react.vercel.app/components/input
 * @extends HTMLInputElement
 * @prop data-testid?: string
 */

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
            ...rest
        },
        ref
    ) => {
        const inputProps = {
            "data-testid": testid,
            id,
            label,
            helper,
            helperBottom,
            validation,
            counter,
            maxLength,
            value,
            className,
            ref,
            type,
            ...rest,
        } as any

        if (label || helper || helperBottom || validation || counter)
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
                    <InputFunction {...inputProps} />
                </InputContainer>
            )

        return <InputFunction {...inputProps} />
    }
)
