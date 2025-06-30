import { type FC } from "react"
import { clsx } from "../../../utils"
import { INPUT_CLASSES, INPUT_CONTAINER_CLASSES } from "../classes"
import {
	InputPrefix,
	InputValidation,
	InputSuffix,
	InputIcon,
} from "../../InputComponents"
import type { ILibTextInput } from "../subtypes"

export const TextInput: FC<ILibTextInput> = ({
	id,
	className,
	validation,
	inputBackground,
	inputVariant,
	prefix,
	suffix,
	type = "text",
	icon,
	disabled,
	...rest
}) => {
	return (
		<div
			className={clsx(
				INPUT_CONTAINER_CLASSES({
					validation,
					inputBackground,
					inputVariant,
				}),
				className,
			)}
		>
			<InputPrefix prefix={prefix} />

			<InputIcon
				icon={icon}
				inputVariant={inputVariant}
				disabled={disabled}
			/>

			<input
				{...rest}
				className={clsx(INPUT_CLASSES)}
				type={type}
				disabled={disabled}
			/>

			<InputValidation validation={validation} />

			<InputSuffix suffix={suffix} />
		</div>
	)
}
