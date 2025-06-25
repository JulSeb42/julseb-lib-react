import { type FC } from "react"
import {
	clsx,
	genBorderRadius,
	genBorderAllColors,
	genBgAllColors,
	genTextAllColor,
} from "../../utils"
import type { ILibAvatar } from "./types"

export const AvatarFn: FC<
	Omit<ILibAvatar, "badge" | "containerStyle" | "containerClassName">
> = ({
	className,
	element = "span",
	ref,
	children,
	borderRadius = "full",
	backgroundColor = "primary",
	borderColor = "transparent",
	contentColor = "white",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex justify-center items-center rounded-full size-12 overflow-hidden font-bold text-xl",
				borderColor !== "transparent" && "border-1 border-solid",
				genBorderRadius[borderRadius],
				genBorderAllColors[borderColor],
				genBgAllColors[backgroundColor],
				genTextAllColor[contentColor],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
