import { useState, useMemo, useRef, type FC } from "react"
import { BiCaretDown, BiSearch } from "react-icons/bi"
import { InputContainer } from "../InputContainer"
import { Text } from "../Text"
import {
	InputValidation,
	InputWrapper,
	InputList,
	InputWithListWrapper,
	INPUT_COMMON_CLASSES,
	InputListItem,
} from "../InputComponents"
import { useClickOutside } from "../../hooks"
import { clsx } from "../../utils"
import { countries } from "./utils/countries"
import type { ILibInputPhone } from "./types"

/**
 * InputPhone component for phone number input with country selection dropdown and search functionality.
 *
 * @component
 *
 * @example
 * <InputPhone
 *   id="phone"
 *   label="Phone Number"
 *   selectedCountry={selectedCountry}
 *   setSelectedCountry={setSelectedCountry}
 *   defaultCountry="us"
 * />
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the input phone container.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the input element.
 * @prop {object} [props.selectedCountry] - Currently selected country object with code, name, flag, and dial_code.
 * @prop {function} [props.setSelectedCountry] - Function to update the selected country state.
 * @prop {string} [props.defaultCountry="fr"] - Default country code to display when no country is selected.
 * @prop {object} [props.icons] - Icon configuration object for customizing dropdown caret icon.
 * @prop {string} [props.searchPlaceholder="Search country..."] - Placeholder text for the country search input.
 * @prop {"up" | "down"} [props.listDirection="down"] - Direction for the dropdown list to appear.
 * @prop {string} [props.countryButtonAriaLabel="Select country"] - Aria label for the country selection button.
 * @prop {string} [props.textNoResult="Your search did not return any result."] - Text to display when no search results are found.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {string} [props.label] - Label text to display above the input.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the input.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {"rounded" | "pill"} [props.inputVariant] - Visual variant of the input.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme of the input.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @prop {any} [props.rest] - Additional props spread to the input element.
 *
 * @returns {JSX.Element} The rendered InputPhone component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input-phone
 */
export const InputPhone: FC<ILibInputPhone> = ({
	className,
	ref,
	selectedCountry,
	setSelectedCountry,
	defaultCountry = "fr",
	icons,
	searchPlaceholder = "Search country...",
	listDirection = "down",
	countryButtonAriaLabel = "Select country",
	textNoResult = "Your search did not return any result.",
	id,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	inputVariant,
	inputBackground,
	containerClassName,
	...rest
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const country = useMemo(() => {
		if (selectedCountry) return selectedCountry
		else return countries.find(country => country?.code === defaultCountry)
	}, [defaultCountry, selectedCountry])

	const listRef = useRef<HTMLDivElement>(null)

	useClickOutside(listRef as any, () => {
		if (isOpen) setIsOpen(false)
	})

	const [search, setSearch] = useState("")
	const results = countries.filter(
		country =>
			country?.name.toLowerCase().includes(search.toLowerCase()) ||
			country?.dial_code.toLowerCase().includes(search.toLowerCase()) ||
			country?.code.toLowerCase().includes(search.toLowerCase()),
	)

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			validation={validation}
			hasListOpen={isOpen}
			className={containerClassName}
		>
			<InputWithListWrapper isOpen={isOpen}>
				<InputWrapper
					className={clsx(
						"z-10 relative",
						isOpen &&
							(validation?.status === false
								? "border-danger-500"
								: validation?.status === true
									? "border-success-500"
									: "border-primary-500"),
						inputBackground === "dark"
							? "bg-black text-white"
							: inputBackground === "light" &&
									"bg-white text-black",
						className,
					)}
					validation={validation}
					inputBackground={inputBackground}
					inputVariant={inputVariant}
				>
					<button
						type="button"
						className={clsx(
							"inline-flex items-center gap-1 px-2 border-r-1 border-r-gray-200 w-[81px] h-full",
							"input-phone-country-button",
						)}
						onClick={() => setIsOpen(!isOpen)}
						role="button"
						aria-label={countryButtonAriaLabel}
					>
						{/* <img
							src={country?.flag}
							alt=""
							width={16}
							height={16}
							className="object-contain input-phone-flag"
						/> */}
						{country?.flag}

						{icons?.caret ?? (
							<BiCaretDown
								size={12}
								className="input-phone-caret"
							/>
						)}

						{country?.dial_code}
					</button>

					<input
						id={id}
						ref={ref}
						className={clsx(
							INPUT_COMMON_CLASSES({
								inputBackground,
								validationStatus: validation?.status,
							}),
							"input-phone-input",
						)}
						{...rest}
					/>

					<InputValidation validation={validation} />
				</InputWrapper>

				<InputList
					listDirection={listDirection}
					inputVariant={inputVariant}
					inputBackground={inputBackground}
					validation={validation}
					isOpen={isOpen}
					ref={listRef}
				>
					<div
						className={clsx(
							"inline-flex items-center gap-2 mx-2 border-b border-b-gray-200 w-[calc(100%-16px)]",
							"has-[input:focus]:border-b-primary-500",
							validation?.status === false
								? "has-[input:focus]:border-b-danger-500"
								: validation?.status === true &&
										"has-[input:focus]:border-b-success-500",
							"input-phone-search-container",
						)}
					>
						{icons?.search ?? (
							<BiSearch
								size={16}
								className={clsx(
									"text-primary-500",
									validation?.status === false
										? "text-danger-500"
										: validation?.status === true &&
												"text-success-500",
									"input-phone-search-icon",
								)}
							/>
						)}

						<input
							className="outline-none w-full input-phone-search"
							placeholder={searchPlaceholder}
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
					</div>

					{!results.length ? (
						<Text
							tag="em"
							color="gray-500"
							className="p-2 input-search-no-result"
						>
							{textNoResult}
						</Text>
					) : (
						results.map((result, i) => (
							<InputListItem
								key={result.code}
								onClick={() => {
									setSelectedCountry(result)
									setIsOpen(false)
								}}
								aria-label={result?.name}
								content={undefined}
								value={result.code}
								cursor={undefined}
								index={i}
								validationStatus={validation?.status}
								isActive={
									result?.code ===
									(selectedCountry?.code || defaultCountry)
								}
							>
								{result?.flag}

								{result?.name}
							</InputListItem>
						))
					)}
				</InputList>
			</InputWithListWrapper>
		</InputContainer>
	)
}
