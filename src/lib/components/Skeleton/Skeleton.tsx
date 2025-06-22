import { type FC } from "react"
import { clsx, genBgAllColors, genBorderRadius } from "../../utils"
import type { ILibSkeleton } from "./types"
import type { LibSkeletonAnimation } from "../../types"

/**
 * Skeleton component for displaying a loading placeholder.
 *
 * @component
 * @extends HTMLDivElement
 *
 * @example
 * <Skeleton backgroundColor="gray-100" borderRadius="lg" animation="pulse" />
 *
 * @prop {LibAllColors} [backgroundColor] - Background color of the skeleton.
 * @prop {LibRadiuses} [borderRadius] - Border radius of the skeleton.
 * @prop {LibSkeletonAnimation} [animation] - Animation style for the skeleton. Possible values: "pulse", "shine".
 *
 * @returns {JSX.Element} The rendered Skeleton component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/skeleton
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
