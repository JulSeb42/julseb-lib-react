import { type FC } from "react"
import { clsx } from "../../../utils"
import { InputValidation, InputWrapper } from "../../InputComponents"
import { INPUT_CLASSES } from "../classes"
import type { ILibColorInput } from "../subtypes"

export const ColorInput: FC<ILibColorInput> = ({
	id,
	className,
	type = "color",
	validation,
	inputBackground,
	inputVariant,
	...rest
}) => {
	return (
		<InputWrapper
			className={className}
			validation={validation}
			inputBackground={inputBackground}
			inputVariant={inputVariant}
		>
			<input {...rest} type={type} className={clsx(INPUT_CLASSES)} />

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}
