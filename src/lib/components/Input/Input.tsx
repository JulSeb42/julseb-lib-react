import { type FC } from "react"
import { InputContainer } from "../InputContainer"
import { ColorInput } from "./templates/ColorInput"
import { DateInput } from "./templates/DateInput"
import { FileInput } from "./templates/FileInput"
import { PasswordInput } from "./templates/PasswordInput"
import { SearchInput } from "./templates/SearchInput"
import { SelectInput } from "./templates/SelectInput"
import { TextareaInput } from "./templates/TextareaInput"
import { TextInput } from "./templates/TextInput"
import { TimeInput } from "./templates/TimeInput"
import type { LibInputType } from "../../types"
import type { ILibInput } from "./types"

const renderComponent = (props: any, type: LibInputType) => {
	switch (type) {
		case "color":
			return <ColorInput type={type} {...props} />
		case "date":
		case "datetime-local":
		case "week":
		case "month":
			return <DateInput type={type} {...props} />
		case "file":
			return <FileInput type={type} {...props} />
		case "password":
			return <PasswordInput type={type} {...props} />
		case "search":
			return <SearchInput type={type} {...props} />
		case "select":
			return <SelectInput type={type} {...props} />
		case "textarea":
			return <TextareaInput type={type} {...props} />
		case "time":
			return <TimeInput type={type} {...props} />
		case "text":
		case "email":
		case "number":
		case "tel":
		case "url":
		default:
			return <TextInput type={type} {...props} />
	}
}

// @ts-ignore
const InputFunction: FC<ILibInput> = ({ type, ...rest }) =>
	renderComponent(rest, type as LibInputType)

/**
 * Input component with multiple types and variants for form data collection.
 *
 * @component
 *
 * @example
 * <Input type="text" label="Name" placeholder="Enter your name" />
 * <Input type="email" label="Email" validation={{ status: true }} />
 * <Input type="select" label="Country">
 *   <option value="us">United States</option>
 *   <option value="ca">Canada</option>
 * </Input>
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the input.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the input element.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {string} [props.label] - Label text to display above the input.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the input.
 * @prop {"color" | "date" | "datetime-local" | "month" | "week" | "file" | "password" | "search" | "email" | "number" | "tel" | "text" | "url" | "time" | "select" | "textarea"} [props.type="text"] - Type of input to render.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {string | number} [props.value] - Current value of the input.
 * @prop {boolean | object} [props.counter] - Whether to show character counter or counter configuration.
 * @prop {number} [props.maxLength] - Maximum number of characters allowed.
 * @prop {"rounded" | "pill"} [props.inputVariant] - Visual variant of the input.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme of the input.
 * @prop {React.ReactNode} [props.icon] - Icon element to display inside the input.
 * @prop {string} [props.placeholder] - Placeholder text for the input.
 * @prop {boolean} [props.disabled] - Whether the input is disabled.
 * @prop {React.ReactNode} [props.children] - Child elements for select type.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @prop {any} [props.rest] - Additional props spread to the input element.
 *
 * @returns {JSX.Element} The rendered Input component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input
 */
export const Input: FC<ILibInput> = ({
	className,
	ref,
	id,
	label,
	labelComment,
	helper,
	helperBottom,
	containerClassName,
	// @ts-ignore
	validation,
	value,
	// @ts-ignore
	counter,
	// @ts-ignore
	maxLength,
	...rest
}) => {
	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			validation={validation}
			value={value}
			counter={counter as any}
			maxLength={maxLength}
			id={id}
			className={containerClassName}
		>
			<InputFunction
				ref={ref}
				value={value}
				maxLength={maxLength as any}
				className={className}
				id={id}
				// @ts-ignore
				validation={validation as any}
				{...rest}
			/>
		</InputContainer>
	)
}
