import { useRef, type FC, type MouseEvent } from "react"
import { BiChevronDown } from "react-icons/bi"
import { clsx } from "../../../utils"
import { useMergeRefs } from "../../../hooks"
import {
	InputIcon,
	InputValidation,
	InputButton,
	InputWrapper,
	INPUT_COMMON_CLASSES,
} from "../../InputComponents"
import type { ILibSelectInput } from "../subtypes"

export const SelectInput: FC<ILibSelectInput> = ({
	ref,
	children,
	className,
	validation,
	inputBackground,
	inputVariant,
	icon,
	iconSelect = <BiChevronDown size={16} />,
	disabled,
	...rest
}) => {
	const el = useRef<HTMLSelectElement>(null)

	const handleContainerClick = () => {
		if (!disabled && el.current) {
			el.current.focus()

			if ("showPicker" in el.current) {
				el.current.showPicker()
			}
		}
	}

	const handleIconClick = (e: MouseEvent) => {
		e.preventDefault()
		handleContainerClick()
	}

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

			<select
				{...rest}
				ref={useMergeRefs([ref, el])}
				className={clsx(
					"appearance-none cursor-pointer",
					INPUT_COMMON_CLASSES({
						inputBackground,
						validationStatus: validation?.status,
					}),
					"input-select",
				)}
				disabled={disabled}
			>
				{children}
			</select>

			<InputValidation validation={validation} />

			<InputButton
				className="text-gray-500"
				onClick={handleIconClick}
				disabled={disabled}
			>
				{iconSelect}
			</InputButton>
		</InputWrapper>
	)
}
