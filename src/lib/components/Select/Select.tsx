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
} from "../InputComponents"
import { clsx } from "../../utils"
import type { ILibSelect } from "./types"

/*
	Generate JSDoc with:
	* <short description of the component>
	*
	* @component
	*
	* @example
	* <an example of the component>
	* 
	* @extends <type the component is extending (check in ./types.ts)>
	*
	for each prop, generate:
	* @prop {type} [props.<prop name>] <prop with the possible values, and default values> - <short description of the prop>
	* 
	* @returns <what the component returns>
	*
	* @see https://doc-julseb-lib-react.vercel.app/components/<name of the component>
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

						<span className="px-2 text-left grow">{value}</span>

						<InputValidation validation={validation} />

						{icons?.caret ?? (
							<span className="px-2">
								<BiCaretDown
									size={16}
									className={clsx(
										validation?.status === false
											? "text-danger-500"
											: validation?.status === true
												? "text-success-500"
												: "text-primary-500",
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
						<button
							key={option}
							onClick={() => {
								setValue(option)
								setIsOpen(false)
							}}
							className={clsx(
								"p-2 w-full text-left",
								validation?.status === false
									? "hover:bg-danger-300 active:bg-danger-600"
									: validation?.status === true
										? "hover:bg-success-300 active:bg-success-600"
										: "hover:bg-primary-300 active:bg-primary-600",
								cursor === i &&
									(validation?.status === false
										? "bg-danger-300"
										: validation?.status === true
											? "bg-success-300"
											: "bg-primary-300"),
								option === value && "text-white",
								option === value &&
									(validation?.status === false
										? "bg-danger-500"
										: validation?.status === true
											? "bg-success-500"
											: "bg-primary-500"),
							)}
						>
							{option}
						</button>
					))}
				</InputList>
			</InputWithListWrapper>
		</InputContainer>
	)
}
