import { forwardRef } from "react"
import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import { genLinkColor, genTextAlign, genTextColor } from "../../../utils"
import type { ILibText } from "../types"

export const Em = forwardRef<HTMLParagraphElement, ILibText>(
	(
		{
			element = "em",
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
					"italic",
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
