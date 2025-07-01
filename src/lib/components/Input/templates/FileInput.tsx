import { type FC } from "react"
import { clsx } from "../../../utils"
import { InputValidation } from "../../InputComponents"
import { INPUT_CLASSES, INPUT_CONTAINER_CLASSES } from "../classes"
import type { ILibFileInput } from "../subtypes"

export const FileInput: FC<ILibFileInput> = ({
	id,
	className,
	type = "file",
	validation,
	inputBackground,
	inputVariant,
	...rest
}) => {
	return (
		<div
			className={clsx(
				"cursor-pointer",
				INPUT_CONTAINER_CLASSES({
					validation,
					inputBackground,
					inputVariant,
				}),
				className,
			)}
		>
			<input
				{...rest}
				type={type}
				className={clsx(
					INPUT_CLASSES,
					"cursor-pointer px-0",
					"[&::file-selector-button]:bg-gray-200 [&::file-selector-button]:px-2 hover:[&::file-selector-button]:bg-gray-300 [&::file-selector-button]:cursor-pointer [&::file-selector-button]:transition-all [&::file-selector-button]:duration-200 [&::file-selector-button]:ease-in-out [&::file-selector-button]:h-8 [&::file-selector-button]:mr-2 [&::file-selector-button]:text-black",
				)}
			/>

			<InputValidation validation={validation} />
		</div>
	)
}
