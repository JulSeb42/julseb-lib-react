import { type FC } from "react"
import { clsx } from "../../../utils"
import { genBorderBottomColor } from "../utils/gen-border-bottom"
import type { ILibLoader } from "../types"

export const LoaderOne: FC<Omit<ILibLoader, "variant">> = ({
	className,
	element = "span",
	ref,
	color = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-block relative border-8 border-transparent rounded-full size-12 animate-spin",
				genBorderBottomColor[color],
				className,
			)}
			{...rest}
		/>
	)
}
