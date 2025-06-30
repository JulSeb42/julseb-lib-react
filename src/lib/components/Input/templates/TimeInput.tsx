import { useRef, type FC } from "react"
import { BiTime } from "react-icons/bi"
import { clsx } from "../../../utils"
import { useMergeRefs } from "../../../hooks"
import {
	InputValidation,
	InputButton,
	InputIcon,
	InputPrefix,
} from "../../InputComponents"
import { INPUT_CLASSES, INPUT_CONTAINER_CLASSES } from "../classes"
import type { ILibTimeInput } from "../subtypes"

export const TimeInput: FC<ILibTimeInput> = ({
	ref,
	id,
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
			<InputPrefix prefix={prefix} />

			<InputIcon
				icon={icon}
				inputVariant={inputVariant}
				disabled={disabled}
			/>

			<input
				{...rest}
				className={clsx(
					INPUT_CLASSES,
					"[&::-webkit-calendar-picker-indicator]:opacity-0",
					"[&::-webkit-calendar-picker-indicator]:absolute",
				)}
				ref={useMergeRefs([el, ref])}
				type={type}
				disabled={disabled}
			/>

			<InputButton onClick={showPicker}>{iconClock}</InputButton>

			<InputValidation validation={validation} />
		</div>
	)
}
