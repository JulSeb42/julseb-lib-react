import { type FC } from "react"
import {} from "@julseb-lib/utils"
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

const InputFunction: FC<ILibInput> = ({ type, ...rest }: ILibInput) =>
	renderComponent(rest, type as LibInputType)

/*
	Generate JSDoc with:
	* <short description of the component>
	*
	* @component
	*
	* @example
	* <an example of the component>
	* 
	* @extends <type the component is extending (check in ./types.ts)>
	*
	for each prop, generate:
	* @prop {type} [props.<prop name>] <prop with the possible values, and default values> - <short description of the prop>
	* 
	* @returns <what the component returns>
	*
	* @see https://doc-julseb-lib-react.vercel.app/components/<name of the component>
*/
export const Input: FC<ILibInput> = ({
	className,
	ref,
	id,
	label,
	labelComment,
	helper,
	helperBottom,
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
		>
			<InputFunction
				ref={ref}
				value={value}
				maxLength={maxLength as any}
				className={className}
				// @ts-ignore
				validation={validation as any}
				{...rest}
			/>
		</InputContainer>
	)
}
