import type { FC } from "react"
import { BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genTextAllColor,
	genButtonColor,
} from "../../../utils"
import type { ILibText } from "../types"

export const Ol: FC<ILibText> = ({
	element = "ol",
	className,
	children,
	color = "currentColor",
	linkColor = "primary",
	textAlign = "left",
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				BASE_CLASSES,
				"text-(length:--font-size-body)",
				"list-decimal ps-8",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
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
