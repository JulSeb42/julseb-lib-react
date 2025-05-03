import { forwardRef } from "react"
import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import { genLinkColor, genTextAlign, genTextColor } from "../../../utils"
import type { ILibText } from "../types"

export const H4 = forwardRef<HTMLHeadingElement, ILibText>(
	(
		{
			element = "h4",
			className,
			children,
			color = "currentColor",
			linkColor = "blue",
			textAlign = "left",
			display,
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
					display ? "text-[48px]" : "text-[24px]",
					"font-black",
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
