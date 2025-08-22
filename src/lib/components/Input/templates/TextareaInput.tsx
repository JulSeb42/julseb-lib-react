import { type FC } from "react"
import { clsx } from "../../../utils"
import { INPUT_CONTAINER_CLASSES } from "../../InputComponents/classes"
import type { ILibTextareaInput } from "../subtypes"

export const TextareaInput: FC<ILibTextareaInput> = ({
	className,
	validation,
	inputBackground,
	...rest
}) => {
	return (
		<textarea
			{...rest}
			className={clsx(
				INPUT_CONTAINER_CLASSES({
					validation,
					inputBackground,
					inputVariant: undefined,
					noWrapper: true,
				}),
				"min-h-[80px] max-h-[160px] field-sizing-content h-fit resize-y p-1",
				"input-textarea",
				className,
			)}
		/>
	)
}
