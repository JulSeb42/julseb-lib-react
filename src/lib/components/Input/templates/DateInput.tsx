import { useRef, type FC } from "react"
import { BiCalendar } from "react-icons/bi"
import { clsx } from "../../../utils"
import { useMergeRefs } from "../../../hooks"
import {
	InputValidation,
	InputButton,
	InputIcon,
	InputWrapper,
	INPUT_COMMON_CLASSES,
} from "../../InputComponents"
import type { ILibDateInput } from "../subtypes"

export const DateInput: FC<ILibDateInput> = ({
	ref,
	id,
	className,
	type = "date",
	validation,
	inputBackground,
	inputVariant,
	icon,
	iconCalendar = <BiCalendar size={16} />,
	disabled,
	...rest
}) => {
	const el = useRef<HTMLInputElement>(null)
	const showPicker = () => el.current?.showPicker()

	return (
		<InputWrapper
			className={className}
			validation={validation}
			inputBackground={inputBackground}
			inputVariant={inputVariant}
		>
			<InputIcon
				icon={icon}
				inputVariant={inputVariant}
				disabled={disabled}
			/>

			<input
				{...rest}
				type={type}
				ref={useMergeRefs([ref, el])}
				className={clsx(
					INPUT_COMMON_CLASSES({
						inputBackground,
						validationStatus: validation?.status,
					}),
					"cursor-pointer",
					"[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
				)}
				disabled={disabled}
			/>

			<InputButton onClick={showPicker}>{iconCalendar}</InputButton>

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}
