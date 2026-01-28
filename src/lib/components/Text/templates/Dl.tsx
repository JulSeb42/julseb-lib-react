import type { FC } from "react"
import { TEXT_BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genTextAllColor,
	genButtonColor,
	genFontSize,
} from "../../../utils"
import type { ILibText } from "../types"
import type { LibFontWeights } from "../../../types"

export const Dl: FC<ILibText> = ({
	element = "dl",
	className,
	children,
	fontSize = "body",
	color = "current",
	linkColor = "primary",
	textAlign = "left",
	fontWeight = "normal",
	dtFontWeight = "bold",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				TEXT_BASE_CLASSES,
				genFontSize[fontSize],
				generateFontWeightDt[dtFontWeight],
				generateFontWeightDd[fontWeight],
				"[&_dd]:ps-4",
				genTextAlign[textAlign],
				genTextAllColor[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"dl",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

const generateFontWeightDt: Record<LibFontWeights, string> = {
	thin: "[&_dt]:font-thin",
	light: "[&_dt]:font-light",
	normal: "[&_dt]:font-normal",
	bold: "[&_dt]:font-bold",
	black: "[&_dt]:font-black",
}

const generateFontWeightDd: Record<LibFontWeights, string> = {
	thin: "[&_dd]:font-thin",
	light: "[&_dd]:font-light",
	normal: "[&_dd]:font-normal",
	bold: "[&_dd]:font-bold",
	black: "[&_dd]:font-black",
}
