import { forwardRef } from "react"
import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import { genLinkColor, genTextAlign, genTextColor } from "../../../utils"
import type { ILibText } from "../types"

export const Blockquote = forwardRef<HTMLQuoteElement, ILibText>(
	(
		{
			element = "blockquote",
			className,
			children,
			color = "currentColor",
			linkColor = "blue",
			textAlign = "left",
			...rest
		},
		ref,
	) => {
		const Element = element

		return (
			<Element
				ref={ref}
				className={clsx(
					BASE_CLASSES,
					"text-[18px]",
					"italic ps-4",
					(genTextAlign as any)[textAlign],
					(genTextColor as any)[color],
					genLinkColor[linkColor],
					className,
				)}
				{...rest}
			>
				{children}
			</Element>
		)
	},
)

// font-style: italic;
// ${({ $textAlign, $color, $linkColor }) =>
// 	TextBaseMixin({
// 		$fontSize: "h6",
// 		$fontWeight: "bold",
// 		$textAlign,
// 		$color,
// 		$linkColor,
// 	})}
