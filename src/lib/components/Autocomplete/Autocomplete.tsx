import { useRef, useMemo, type FC } from "react"
import Fuse from "fuse.js"
import { BiX } from "react-icons/bi"
import { uuid } from "@julseb-lib/utils"
import { useTouchScreen, useKeyPress, useMergeRefs } from "../../hooks"
import { transformSearchKeys, useKeyboardNavigation } from "../../lib-utils"
import { Key } from "../Key"
import { Highlight } from "../Highlight"
import { Text } from "../Text"
import { InputContainer } from "../InputContainer"
import {
	InputWrapper,
	InputWithListWrapper,
	InputIcon,
	InputButton,
	InputValidation,
	InputList,
	INPUT_COMMON_CLASSES,
	InputListItem,
} from "../InputComponents"
import { clsx } from "../../utils"
import type { ILibAutocomplete } from "./types"

/**
 * Autocomplete component for text input with fuzzy search functionality, keyboard navigation, and customizable dropdown results.
 *
 * @component
 *
 * @example
 * <Autocomplete
 *   value={searchValue}
 *   setValue={setSearchValue}
 *   listResults={["React", "Vue", "Angular", "Svelte"]}
 *   label="Framework"
 *   placeholder="Search frameworks..."
 *   focusKeys={["cmd+k"]}
 * />
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the autocomplete container.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the input element.
 * @prop {string} [props.label] - Label text to display above the autocomplete.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the autocomplete.
 * @prop {string} [props.value] - Current input value for searching.
 * @prop {function} [props.setValue] - Function to update the input value.
 * @prop {"rounded" | "pill"} [props.inputVariant] - Visual variant of the input field.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme of the input field.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {string[]} [props.listResults] - Array of items to search through and display as results.
 * @prop {"up" | "down"} [props.listDirection] - Direction for the dropdown results to appear.
 * @prop {object} [props.fuzzyOptions={}] - Configuration options for Fuse.js fuzzy search.
 * @prop {object} [props.icons] - Icon configuration object with left icon and clear icon.
 * @prop {string[]} [props.focusKeys=[""]] - Array of keyboard shortcuts to focus the input.
 * @prop {boolean} [props.showKeys] - Whether to display the keyboard shortcut keys.
 * @prop {string} [props.textNoResult="No result."] - Text to display when no search results are found.
 * @prop {boolean} [props.disabled] - Whether the autocomplete is disabled.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {any} [props.rest] - Additional props spread to the input element.
 *
 * @returns {JSX.Element} The rendered Autocomplete component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/autocomplete
 */
export const Autocomplete: FC<ILibAutocomplete> = ({
	className,
	ref,
	label,
	labelComment,
	helper,
	helperBottom,
	value,
	setValue,
	inputVariant,
	inputBackground,
	id,
	listResults,
	listDirection,
	fuzzyOptions = {},
	icons,
	focusKeys = [""],
	showKeys,
	textNoResult = "No result.",
	disabled,
	validation,
	...rest
}) => {
	const isTouchScreen = useTouchScreen()
	const inputRef = useRef<HTMLInputElement>(null)

	const keys = focusKeys
	useKeyPress(keys, () => inputRef?.current?.focus())

	const fuzzyResults = useMemo(() => {
		const fuse = new Fuse(listResults, fuzzyOptions) as any

		return fuse
			?.search(value)
			?.slice(0, 20)
			?.map((res: any) => res.item)
	}, [fuzzyOptions, listResults, value])

	const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation<
		typeof fuzzyResults
	>({
		data: fuzzyResults,
		value,
		setValue,
	})

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			value={validation}
			id={id}
			validation={validation}
			hasListOpen={isOpen}
		>
			<InputWithListWrapper isOpen={isOpen}>
				<InputWrapper
					validation={validation}
					inputBackground={inputBackground}
					inputVariant={inputVariant}
					className={clsx(className)}
					hasListOpen={isOpen}
				>
					<InputIcon
						icon={icons?.left}
						inputVariant={inputVariant}
						disabled={disabled}
					/>

					<input
						ref={useMergeRefs([ref, inputRef])}
						className={clsx(
							INPUT_COMMON_CLASSES({
								inputBackground,
								validationStatus: validation?.status,
							}),
							"autocomplete-input",
							className,
						)}
						id={id}
						value={value}
						onChange={e => setValue(e.target.value)}
						disabled={disabled}
						onFocus={() => setIsOpen(true)}
						onBlur={() => setTimeout(() => setIsOpen(false), 100)}
						{...rest}
					/>

					{value?.length ? (
						<InputButton
							onClick={() => setValue("")}
							className="input-clear-button"
						>
							{icons?.clear ?? (
								<BiX size={16} className="input-clear-icon" />
							)}
						</InputButton>
					) : null}

					{!isTouchScreen && showKeys && !disabled && (
						<span className="inline-flex items-center px-2 input-key-container">
							<Key size="small" className="input-key">
								{transformSearchKeys(keys)}
							</Key>
						</span>
					)}

					<InputValidation validation={validation} />
				</InputWrapper>

				<InputList
					isOpen={isOpen && value.length}
					listDirection={listDirection}
					inputBackground={inputBackground}
					inputVariant={inputVariant}
					validation={validation}
					ref={listRef}
				>
					{fuzzyResults?.length ? (
						<>
							{fuzzyResults.map((result: string, i: number) => (
								<InputListItem
									key={uuid()}
									onClick={() => setValue(result)}
									cursor={cursor}
									validationStatus={validation?.status}
									content={undefined}
									value={result}
									index={i}
									aria-label={result}
								>
									<Highlight
										className="autocomplete-result"
										highlightedText={value}
									>
										{result}
									</Highlight>
								</InputListItem>
							))}
						</>
					) : (
						<Text
							tag="em"
							color="gray-500"
							className={clsx("p-2", "autocomplete-no-result")}
						>
							{textNoResult}
						</Text>
					)}
				</InputList>
			</InputWithListWrapper>
		</InputContainer>
	)
}
