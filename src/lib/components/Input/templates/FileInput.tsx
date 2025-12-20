import { type FC } from "react"
import { clsx } from "../../../utils"
import {
	InputValidation,
	InputWrapper,
	INPUT_COMMON_CLASSES,
} from "../../InputComponents"
import type { ILibFileInput } from "../subtypes"

export const FileInput: FC<ILibFileInput> = ({
	className,
	type = "file",
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
					"cursor-pointer px-0",
					"file:bg-gray-200 file:px-2 hover:file:bg-gray-300 file:cursor-pointer file:transition-all file:duration-200 file:ease-in-out file:h-8 file:mr-2 file:text-black",
					"input-file",
				)}
			/>

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}
