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

export const Dl: FC<ILibText> = ({
	element = "dl",
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
				"text-(length:--font-size-body)",
				"[&>dt]:font-bold",
				"[&>dd]:font-normal [&>dd]:ps-4",
				genTextAlign[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"dl",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
