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

export const H3: FC<ILibText> = ({
	element = "h3",
	className,
	children,
	color = "currentColor",
	linkColor = "primary",
	textAlign = "left",
	display,
	...rest
}) => {
	const Element = element

	return (
		<Element
			className={clsx(
				BASE_CLASSES,
				"font-black",
				display
					? "text-(length:--font-size-display-h3)"
					: "text-(length:--font-size-h3)",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"h3",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
