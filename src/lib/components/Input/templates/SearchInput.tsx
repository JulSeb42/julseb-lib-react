import { useRef, type FC } from "react"
import { BiX } from "react-icons/bi"
import { clsx } from "../../../utils"
import { transformSearchKeys } from "../../../lib-utils"
import { Key } from "../../Key"
import { InputButton, InputIcon, InputPrefix } from "../../InputComponents"
import { useTouchScreen, useMergeRefs, useKeyPress } from "../../../hooks"
import { INPUT_CLASSES, INPUT_CONTAINER_CLASSES } from "../classes"
import type { ILibSearchInput } from "../subtypes"

export const SearchInput: FC<ILibSearchInput> = ({
	id,
	ref,
	className,
	inputBackground,
	inputVariant,
	type = "search",
	clearSearch,
	icon,
	iconClear,
	focusKeys,
	showKeys,
	value,
	prefix,
	disabled,
	...rest
}) => {
	const isTouchScreen = useTouchScreen()

	const el = useRef<HTMLInputElement>(null)

	const handleFocus = () => el?.current?.focus()
	const keys = focusKeys ?? [""]
	useKeyPress(keys, handleFocus)

	return (
		<div
			className={clsx(
				INPUT_CONTAINER_CLASSES({
					validation: undefined,
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
				ref={useMergeRefs([ref, el])}
				className={clsx(
					"[&::-webkit-search-cancel-button]:appearance-none",
					"[&::-webkit-search-cancel-button]:hidden",
					"[&::-webkit-search-decoration]:appearance-none",
					"[&::-webkit-search-decoration]:hidden",
					INPUT_CLASSES,
				)}
				type={type}
				disabled={disabled}
				value={value}
			/>

			{clearSearch && value?.length > 0 && (
				<InputButton onClick={clearSearch}>
					<BiX />
				</InputButton>
			)}

			{!isTouchScreen && showKeys && (
				<span className="inline-flex items-center px-2">
					<Key keys={transformSearchKeys(keys)} size="small" />
				</span>
			)}
		</div>
	)
}
