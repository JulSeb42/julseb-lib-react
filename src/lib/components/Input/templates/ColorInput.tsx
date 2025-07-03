import { type FC } from "react"
import { clsx } from "../../../utils"
import {
	InputValidation,
	InputWrapper,
	INPUT_COMMON_CLASSES,
} from "../../InputComponents"
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
			<input
				{...rest}
				type={type}
				className={clsx(
					INPUT_COMMON_CLASSES({
						inputBackground,
						validationStatus: validation?.status,
					}),
				)}
			/>

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}
