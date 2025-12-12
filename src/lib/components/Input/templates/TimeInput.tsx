import { useRef, type FC } from "react"
import { BiTime } from "react-icons/bi"
import { clsx } from "../../../utils"
import { useMergeRefs } from "../../../hooks"
import {
	InputValidation,
	InputButton,
	InputIcon,
	InputPrefix,
	InputWrapper,
	INPUT_COMMON_CLASSES,
} from "../../InputComponents"
import type { ILibTimeInput } from "../subtypes"

const TimeInput: FC<ILibTimeInput> = ({
	ref,
	className,
	validation,
	inputBackground,
	inputVariant,
	type = "time",
	icon,
	iconClock = <BiTime size={16} />,
	disabled,
	prefix,
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
			<InputPrefix prefix={prefix} />

			<InputIcon
				icon={icon}
				inputVariant={inputVariant}
				disabled={disabled}
			/>

			<input
				{...rest}
				className={clsx(
					INPUT_COMMON_CLASSES({
						inputBackground,
						validationStatus: validation?.status,
					}),
					"[&::-webkit-calendar-picker-indicator]:opacity-0",
					"[&::-webkit-calendar-picker-indicator]:absolute",
					"input-time",
				)}
				ref={useMergeRefs([el, ref])}
				type={type}
				disabled={disabled}
			/>

			<InputButton onClick={showPicker}>{iconClock}</InputButton>

			<InputValidation validation={validation} />
		</InputWrapper>
	)
}

export default TimeInput
