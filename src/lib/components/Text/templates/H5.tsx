import type { FC } from "react"
import clsx from "clsx"
import { BASE_CLASSES } from "../Text"
import {
	genLinkColor,
	genTextAlign,
	genTextColor,
	genButtonColor,
} from "../../../utils"
import type { ILibText } from "../types"

export const H5: FC<ILibText> = ({
	element = "h5",
	className,
	children,
	color = "currentColor",
	linkColor = "blue",
	textAlign = "left",
	display,
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				BASE_CLASSES,
				display ? "text-[40px]" : "text-[20px]",
				"font-black",
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
