import type { FC } from "react"
import { TEXT_BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genTextAllColor,
	genButtonColor,
} from "../../../utils"
import type { ILibText } from "../types"

export const Small: FC<ILibText> = ({
	element = "small",
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
				TEXT_BASE_CLASSES,
				"text-(length:--font-size-small)",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"small",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
