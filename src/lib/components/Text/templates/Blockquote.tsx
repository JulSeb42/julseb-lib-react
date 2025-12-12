import type { FC } from "react"
import { TEXT_BASE_CLASSES } from "../Text"
import {
	clsx,
	genLinkColor,
	genTextAlign,
	genButtonColor,
	genTextAllColor,
} from "../../../utils"
import type { ILibText } from "../types"

const Blockquote: FC<ILibText> = ({
	element = "blockquote",
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
				"text-h6",
				"italic ps-4",
				genTextAlign[textAlign],
				(genTextAllColor as any)[color],
				genLinkColor[linkColor],
				genButtonColor[linkColor],
				"blockquote",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

export default Blockquote
