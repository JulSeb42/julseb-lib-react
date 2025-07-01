import { uuid } from "@julseb-lib/utils"
import { InputCheck } from "../InputCheck"
import { Flexbox } from "../../Flexbox"
import type { ReactChildren } from "../../../types"
import type { ILibInputCheck } from "../types"

const Flex = ({ children }: { children?: ReactChildren }) => {
	return (
		<Flexbox gap="sm" flexWrap="wrap">
			{children}
		</Flexbox>
	)
}

export const DemoCheckbox = (props: Omit<ILibInputCheck, "id">) => {
	return (
		<Flex>
			<InputCheck {...props} id={uuid()} type="checkbox" name="checkbox">
				{props.children ?? "Checkbox"}
			</InputCheck>
			<InputCheck
				{...props}
				id={uuid()}
				type="checkbox"
				name="checkbox"
				defaultChecked
			>
				{props.children ?? "Checkbox"}
			</InputCheck>

			<InputCheck
				{...props}
				id={uuid()}
				type="checkbox"
				name="checkbox"
				validation={false}
			>
				{props.children ?? "Checkbox"}
			</InputCheck>
			<InputCheck
				{...props}
				id={uuid()}
				type="checkbox"
				name="checkbox"
				validation={false}
				defaultChecked
			>
				{props.children ?? "Checkbox"}
			</InputCheck>

			<InputCheck
				{...props}
				id={uuid()}
				type="checkbox"
				name="checkbox"
				disabled
			>
				{props.children ?? "Checkbox"}
			</InputCheck>
			<InputCheck
				{...props}
				id={uuid()}
				type="checkbox"
				name="checkbox"
				disabled
				defaultChecked
			>
				{props.children ?? "Checkbox"}
			</InputCheck>
		</Flex>
	)
}

export const DemoRadio = (props: Omit<ILibInputCheck, "id">) => {
	return (
		<Flex>
			<InputCheck
				{...(props as any)}
				id={uuid()}
				type="radio"
				name="radio"
			>
				Radio
			</InputCheck>
			<InputCheck
				{...(props as any)}
				id={uuid()}
				type="radio"
				name="radio"
				defaultChecked
			>
				Radio
			</InputCheck>

			<InputCheck
				{...(props as any)}
				id={uuid()}
				type="radio"
				name="radio-validation"
				validation={false}
			>
				Radio
			</InputCheck>
			<InputCheck
				{...(props as any)}
				id={uuid()}
				type="radio"
				name="radio-validation"
				validation={false}
				defaultChecked
			>
				Radio
			</InputCheck>

			<InputCheck
				{...(props as any)}
				id={uuid()}
				type="radio"
				name="radio-disabled"
				disabled
			>
				Radio
			</InputCheck>
			<InputCheck
				{...(props as any)}
				id={uuid()}
				type="radio"
				name="radio-disabled"
				disabled
				defaultChecked
			>
				Radio
			</InputCheck>
		</Flex>
	)
}
