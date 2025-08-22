import { type FC } from "react"
import { stringifyPx } from "@julseb-lib/utils"
import { Input } from "../Input"
import { clsx } from "../../utils"
import type { ILibHeaderSearch } from "./subtypes"

export const HeaderSearch: FC<ILibHeaderSearch> = ({ search, handleClose }) => {
	if (!search) return null

	const {
		value,
		setValue,
		handleSubmit,
		placeholder,
		iconLeft,
		iconClear,
		focusKeys,
		showKeys,
		inputBackground,
		inputVariant,
		maxWidth = 400,
		clearSearch,
	} = search

	return (
		<form
			onSubmit={e => {
				handleSubmit(e)
				handleClose()
			}}
			className={clsx("w-full max-w-(--form-max-width)", "search-form")}
			style={{ ["--form-max-width" as any]: stringifyPx(maxWidth) }}
		>
			<search>
				<Input
					type="search"
					placeholder={placeholder}
					value={value}
					onChange={e => setValue(e.target.value)}
					icon={iconLeft}
					iconClear={iconClear}
					focusKeys={focusKeys}
					showKeys={showKeys}
					inputBackground={inputBackground}
					inputVariant={inputVariant}
					className="search-input"
					clearSearch={clearSearch}
				/>
			</search>
		</form>
	)
}
