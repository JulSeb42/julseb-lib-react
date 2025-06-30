import { type FC } from "react"
import { clsx } from "../../../utils"
import { InputValidation } from "../../InputComponents"
import { INPUT_CONTAINER_CLASSES, INPUT_CLASSES } from "../classes"
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
			<input {...rest} type={type} className={clsx(INPUT_CLASSES)} />

			<InputValidation validation={validation} />
		</div>
	)
}
