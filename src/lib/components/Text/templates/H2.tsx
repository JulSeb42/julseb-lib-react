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

export const H2: FC<ILibText> = ({
	element = "h2",
	className,
	children,
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	display,
	fontSize = display ? "display-h2" : "h2",
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
				"h2",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
