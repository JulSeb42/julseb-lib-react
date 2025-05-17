import { Flexbox } from "../Flexbox"
import { clsx, genBgAllColors, genBorderRadius } from "../../utils"
import type { ILibSkeletonCard } from "./types"

export const SkeletonCard: FC<ILibSkeletonCard> = ({
	element = "div",
	className,
	children,
	isShiny,
	backgroundColor = "background",
	borderRadius = "lg",
	...rest
}) => {
	return (
		<Flexbox
			element={element}
			className={clsx(
				"relative overflow-hidden",
				isShiny && "animate-shine",
				genBgAllColors[backgroundColor],
				genBorderRadius[borderRadius],
				className,
			)}
			{...rest}
		>
			{children}
		</Flexbox>
	)
}
