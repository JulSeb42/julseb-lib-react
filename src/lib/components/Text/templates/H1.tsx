import type { FC } from "react"
import { TEXT_BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genTextAllColor,
	genButtonColor,
	genFontSize,
	genFontWeight,
} from "../../../utils"
import type { ILibText } from "../types"

export const H1: FC<ILibText> = ({
	element = "h1",
	className,
	children,
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	display,
	fontSize = display ? "display-h1" : "h1",
	fontWeight = "black",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				genFontSize[fontSize],
				TEXT_BASE_CLASSES,
				genFontWeight[fontWeight],
				genTextAlign[textAlign],
				genTextAllColor[color],
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
