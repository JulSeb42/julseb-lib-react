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

export const Ol: FC<ILibText> = ({
	element = "ol",
	className,
	children,
	fontSize = "body",
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	fontWeight = "normal",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				TEXT_BASE_CLASSES,
				genFontSize[fontSize],
				genFontWeight[fontWeight],
				"list-decimal ps-8",
				genTextAlign[textAlign],
				genTextAllColor[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"ol",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
