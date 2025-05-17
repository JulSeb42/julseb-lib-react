import { Fragment, type CSSProperties } from "react"
import type { ClassNameValue } from "tailwind-merge"
import { uuid, slugify } from "@julseb-lib/utils"
import { clsx } from "../utils"
import { Text } from ".."
import type { ReactChildren } from "../types"

export const getHighlightedText = (
	text: ReactChildren,
	value: string,
	highlightStyle?: CSSProperties,
	...className: Array<ClassNameValue>
) => {
	const parts = text?.toString().split(new RegExp(`(${value})`, "gi"))

	return (parts as Array<string>).map(part => (
		<Fragment key={uuid()}>
			{slugify(part) === slugify(value) ? (
				<Text
					tag="strong"
					className={clsx(className)}
					style={highlightStyle}
				>
					{part}
				</Text>
			) : (
				part
			)}
		</Fragment>
	))
}
