import type { FC } from "react"
import { BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genTextColor,
	genButtonColor,
} from "../../../utils"
import type { ILibText } from "../types"

export const Blockquote: FC<ILibText> = ({
	element = "blockquote",
	className,
	children,
	color = "currentColor",
	linkColor = "blue",
	textAlign = "left",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				BASE_CLASSES,
				"text-[18px]",
				"italic ps-4",
				(genTextAlign as any)[textAlign],
				(genTextColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

// font-style: italic;
// ${({ $textAlign, $color, $linkColor }) =>
// 	TextBaseMixin({
// 		$fontSize: "h6",
// 		$fontWeight: "bold",
// 		$textAlign,
// 		$color,
// 		$linkColor,
// 	})}
