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

export const H4: FC<ILibText> = ({
	element = "h4",
	className,
	children,
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	display,
	fontSize = display ? "display-h4" : "h4",
	fontWeight = "black",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				TEXT_BASE_CLASSES,
				genFontWeight[fontWeight],
				genFontSize[fontSize],
				genTextAlign[textAlign],
				genTextAllColor[color],
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
