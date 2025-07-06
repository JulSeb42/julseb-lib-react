import { type FC } from "react"
import { clsx, genBgAllColors } from "../../../utils"
import type { ILibLoader } from "../types"

export const LoaderThree: FC<Omit<ILibLoader, "variant">> = ({
	className,
	element = "div",
	ref,
	color = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex gap-2 w-fit h-4",
				"loader loader-3",
				className,
			)}
			{...rest}
		>
			<span
				className={clsx(
					"block rounded-full size-4 dot [--dot-delay:100ms]",
					genBgAllColors[color],
					"loader-3-dot",
				)}
			/>
			<span
				className={clsx(
					"block rounded-full size-4 dot [--dot-delay:300ms]",
					genBgAllColors[color],
					"loader-3-dot",
				)}
			/>
			<span
				className={clsx(
					"block rounded-full size-4 dot [--dot-delay:500ms]",
					genBgAllColors[color],
					"loader-3-dot",
				)}
			/>
		</Element>
	)
}
