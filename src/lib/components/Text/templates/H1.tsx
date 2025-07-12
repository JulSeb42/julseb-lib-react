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

export const H1: FC<ILibText> = ({
	element = "h1",
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
				display
					? "text-(length:--text-display-h1)"
					: "text-(length:--text-h1)",
				TEXT_BASE_CLASSES,
				"font-black",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"h1",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
