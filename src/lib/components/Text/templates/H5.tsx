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

export const H5: FC<ILibText> = ({
	element = "h5",
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
				TEXT_BASE_CLASSES,
				"font-black",
				display
					? "text-(length:--text-display-h5)"
					: "text-(length:--text-h5)",
				(genTextAlign as any)[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"h5",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
