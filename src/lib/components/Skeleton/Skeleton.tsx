import { type FC } from "react"
import {} from "@julseb-lib/utils"
import { clsx, genBgAllColors, genBorderRadius } from "../../utils"
import type { ILibSkeleton } from "./types"
import type { LibSkeletonAnimation } from "../../types"

/**
 * @description Returns a Skeleton component
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends HTMLDivElement
 * @prop element?: ElementType
 * @prop ref?: RefObject<HTMLDivElement>
 */
export const Skeleton: FC<ILibSkeleton> = ({
	className,
	element = "div",
	ref,
	animation = "none",
	backgroundColor = "gray-200",
	borderRadius = "lg",
	...rest
}) => {
	const Element = element

	console.log({ borderRadius, gen: genBorderRadius[borderRadius] })

	return (
		<Element
			ref={ref}
			className={clsx(
				"w-[100px] h-[100px]",
				genBgAllColors[backgroundColor],
				genAnimation[animation],
				genBorderRadius[borderRadius],
				className,
			)}
			{...rest}
		/>
	)
}

const genAnimation: Record<LibSkeletonAnimation, string> = {
	none: "animate-none",
	pulse: "animate-pulse",
	shine: "animate-shine",
}
