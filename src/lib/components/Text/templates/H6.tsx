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

export const H6: FC<ILibText> = ({
	element = "h6",
	className,
	children,
	fontSize = "h6",
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	fontWeight = "black",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				TEXT_BASE_CLASSES,
				genFontSize[fontSize],
				genFontWeight[fontWeight],
				genTextAlign[textAlign],
				genTextAllColor[color],
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
