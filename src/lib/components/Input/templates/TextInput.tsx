import { type FC } from "react"
import { clsx } from "../../../utils"
import { INPUT_CLASSES } from "../classes"
import {
	InputPrefix,
	InputValidation,
	InputSuffix,
	InputIcon,
	InputWrapper,
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
		<InputWrapper
			className={className}
			validation={validation}
			inputBackground={inputBackground}
			inputVariant={inputVariant}
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
		</InputWrapper>
	)
}
