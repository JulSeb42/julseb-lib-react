import type { FC } from "react"
import { TEXT_BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genTextAllColor,
	genButtonColor,
} from "../../../utils"
import type { ILibText } from "../types"

export const H6: FC<ILibText> = ({
	element = "h6",
	className,
	children,
	color = "currentColor",
	linkColor = "primary",
	textAlign = "left",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				TEXT_BASE_CLASSES,
				"text-h6",
				"font-black",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"h6",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
