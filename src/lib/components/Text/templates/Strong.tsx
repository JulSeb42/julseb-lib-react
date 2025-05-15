import type { FC } from "react"
import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import {
	genLinkColor,
	genTextAlign,
	genTextColor,
	genButtonColor,
} from "../../../utils"
import type { ILibText } from "../types"

export const Strong: FC<ILibText> = ({
	element = "strong",
	className,
	children,
	color = "currentColor",
	linkColor = "blue",
	textAlign = "left",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				BASE_CLASSES,
				"font-black",
				(genTextAlign as any)[textAlign],
				(genTextColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
