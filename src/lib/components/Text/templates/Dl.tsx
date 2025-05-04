import { forwardRef } from "react"
import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import { genLinkColor, genTextAlign, genTextColor } from "../../../utils"
import type { ILibText } from "../types"

export const Dl = forwardRef<HTMLDListElement, ILibText>(
	(
		{
			element = "dl",
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
					"text-[16px]",
					"[&>dt]:font-bold",
					"[&>dd]:font-normal [&>dd]:ps-4",
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
