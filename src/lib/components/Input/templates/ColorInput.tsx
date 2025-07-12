import { type FC } from "react"
import { clsx } from "../../../utils"
import {
	InputValidation,
	InputWrapper,
	INPUT_COMMON_CLASSES,
} from "../../InputComponents"
import type { ILibColorInput } from "../subtypes"

export const ColorInput: FC<ILibColorInput> = ({
	className,
	type = "color",
	validation,
	inputBackground,
	inputVariant,
	value,
	...rest
}) => {
	return (
		<InputWrapper
			className={className}
			validation={validation}
			inputBackground={inputBackground}
			inputVariant={inputVariant}
		>
			{value && <span className="pl-2">{value}</span>}

			<input
				{...rest}
				type={type}
				className={clsx(
					INPUT_COMMON_CLASSES({
						inputBackground,
						validationStatus: validation?.status,
					}),
					"input-color",
				)}
				value={value}
			/>

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}
