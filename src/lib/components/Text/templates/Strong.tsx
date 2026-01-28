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

export const Strong: FC<ILibText> = ({
	element = "strong",
	className,
	children,
	fontSize = "body",
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
				"strong",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
