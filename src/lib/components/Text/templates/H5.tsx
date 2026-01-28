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

export const H5: FC<ILibText> = ({
	element = "h5",
	className,
	children,
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	display,
	fontSize = display ? "display-h5" : "h5",
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
				"h5",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
