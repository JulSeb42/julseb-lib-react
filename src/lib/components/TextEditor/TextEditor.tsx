import { type FC } from "react"
import {} from "@julseb-lib/utils"
import { InputContainer } from "../InputContainer"
import { clsx } from "../../utils"
import type { ILibTextEditor } from "./types"

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
export const TextEditor: FC<ILibTextEditor> = ({
	className,
	ref,
	label,
	labelComment,
	helper,
	helperBottom,
	counter,
	maxLength,
	validation,
	id,
	value,
	// ...rest
}) => {
	return (
		<InputContainer
			label={label as any}
			labelComment={labelComment as any}
			helper={helper}
			helperBottom={helperBottom}
			counter={counter}
			maxLength={maxLength as any}
			validation={validation}
			id={id}
			value={value}
		></InputContainer>
	)
}
