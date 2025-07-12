import { useRef, type FC } from "react"
import { BiCaretDown } from "react-icons/bi"
import { useClickOutside } from "../../hooks"
import { useKeyboardNavigation } from "../../lib-utils"
import { InputContainer } from "../InputContainer"
import {
	InputWithListWrapper,
	InputList,
	InputValidation,
	InputIcon,
	InputWrapper,
	InputListItem,
} from "../InputComponents"
import { clsx } from "../../utils"
import type { ILibSelect } from "./types"

/**
 * Select component for creating dropdown selection inputs with keyboard navigation, validation states, and customizable styling.
 *
 * @component
 *
 * @example
 * <Select
 *   value={selectedValue}
 *   setValue={setSelectedValue}
 *   options={["Option 1", "Option 2", "Option 3"]}
 *   label="Choose an option"
 *   placeholder="Select..."
 * />
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the select container.
 * @prop {React.Ref<HTMLButtonElement>} [props.ref] - Ref to the button element.
 * @prop {string} [props.value] - Currently selected value.
 * @prop {function} [props.setValue] - Function to update the selected value.
 * @prop {string[]} [props.options] - Array of options to display in the dropdown.
 * @prop {"up" | "down"} [props.listDirection] - Direction for the dropdown list to appear.
 * @prop {object} [props.icons] - Icon configuration object with left icon and caret icon.
 * @prop {"rounded" | "pill"} [props.inputVariant] - Visual variant of the select input.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme of the select input.
 * @prop {string} [props.label] - Label text to display above the select.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the select.
 * @prop {string} [props.id] - Unique identifier for the select element.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {boolean} [props.disabled] - Whether the select is disabled.
 * @prop {any} [props.rest] - Additional props spread to the button element.
 *
 * @returns {JSX.Element} The rendered Select component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/select
 */
export const Select: FC<ILibSelect> = ({
	className,
	ref,
	value,
	setValue,
	options,
	listDirection,
	icons,
	inputVariant,
	inputBackground,
	label,
	labelComment,
	helper,
	helperBottom,
	id,
	validation,
	disabled,
	...rest
}) => {
	const el = useRef<HTMLDivElement>(null)

	useClickOutside(el as any, () => {
		if (isOpen) setIsOpen(false)
	})

	const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation({
		data: options || [],
		value: value,
		setValue: setValue,
	})

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			hasListOpen={isOpen}
			validation={validation}
		>
			<InputWithListWrapper ref={el} isOpen={isOpen}>
				<InputWrapper
					validation={validation}
					inputBackground={inputBackground}
					inputVariant={inputVariant}
					className={clsx(
						"z-10 relative",
						isOpen &&
							(validation?.status === false
								? "border-danger-500 focus-within:border-danger-500"
								: validation?.status === true
									? "border-success-500 focus-within:border-success-500"
									: "border-primary-500 focus-within:border-primary-500"),
						className,
					)}
				>
					<button
						ref={ref}
						id={id}
						className={clsx(
							"flex items-center gap-2 outline-none w-full",
							inputBackground === "light"
								? "bg-white"
								: inputBackground === "dark"
									? "bg-black"
									: "bg-background",
							validation?.status === false
								? "bg-danger-50"
								: validation?.status === true &&
										"bg-success-50",
							"select-button",
							className,
						)}
						onClick={() => setIsOpen(!isOpen)}
						onFocus={() => setIsOpen(true)}
						disabled={disabled}
						{...rest}
					>
						<InputIcon
							icon={icons?.left}
							inputVariant={inputVariant}
							disabled={disabled}
						/>

						<span className="px-2 text-left select-value grow">
							{value}
						</span>

						<InputValidation validation={validation} />

						{icons?.caret ?? (
							<span className="px-2 select-caret-container">
								<BiCaretDown
									size={16}
									className={clsx(
										validation?.status === false
											? "text-danger-500"
											: validation?.status === true
												? "text-success-500"
												: "text-primary-500",
										"select-caret",
									)}
								/>
							</span>
						)}
					</button>
				</InputWrapper>

				<InputList
					listDirection={listDirection}
					inputVariant={inputVariant}
					inputBackground={inputBackground}
					validation={validation}
					isOpen={isOpen}
					ref={listRef}
				>
					{options?.map((option, i) => (
						<InputListItem
							key={option}
							content={option}
							onClick={() => {
								setValue(option)
								setIsOpen(false)
							}}
							validationStatus={validation?.status}
							value={value}
							cursor={cursor}
							index={i}
							aria-label={option}
							isActive={option === value}
						/>
					))}
				</InputList>
			</InputWithListWrapper>
		</InputContainer>
	)
}
