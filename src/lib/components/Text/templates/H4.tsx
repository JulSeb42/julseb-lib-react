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

export const H4: FC<ILibText> = ({
	element = "h4",
	className,
	children,
	color = "currentColor",
	linkColor = "primary",
	textAlign = "left",
	display,
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				TEXT_BASE_CLASSES,
				"font-black",
				display ? "text-display-h4" : "text-h4",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"h4",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
