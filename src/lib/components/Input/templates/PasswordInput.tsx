import { useState, type FC } from "react"
import { BiShow, BiHide } from "react-icons/bi"
import { clsx } from "../../../utils"
import {
	InputValidation,
	InputButton,
	InputPrefix,
	InputIcon,
	InputWrapper,
} from "../../InputComponents"
import { INPUT_CLASSES } from "../classes"
import type { ILibPasswordInput } from "../subtypes"

export const PasswordInput: FC<ILibPasswordInput> = ({
	id,
	className,
	validation,
	inputBackground,
	inputVariant,
	hideButton,
	button,
	prefix,
	icon,
	disabled,
	...rest
}) => {
	const [inputType, setInputType] = useState<"password" | "text">("password")

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
				type={inputType}
				disabled={disabled}
			/>

			{!hideButton && (
				<InputButton
					onClick={() =>
						setInputType(
							inputType === "password" ? "text" : "password",
						)
					}
				>
					{inputType === "password"
						? (button?.textShow ?? button?.iconShow ?? <BiHide />)
						: (button?.textHide ?? button?.iconHide ?? <BiShow />)}
				</InputButton>
			)}

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}
