import type { FC } from "react"
import { TEXT_BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genButtonColor,
	genTextAllColor,
	genFontSize,
	genFontWeight,
} from "../../../utils"
import type { ILibText } from "../types"

export const Blockquote: FC<ILibText> = ({
	element = "blockquote",
	className,
	children,
	fontSize = "h6",
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
				"italic ps-4",
				genTextAlign[textAlign],
				genFontWeight[fontWeight],
				genTextAllColor[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"blockquote",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
