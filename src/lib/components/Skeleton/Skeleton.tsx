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
const Skeleton: FC<ILibSkeleton> = ({
	className,
	element = "div",
	ref,
	animation = "none",
	backgroundColor = "gray-200",
	borderRadius = "lg",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"w-[100px] h-[100px]",
				genBgAllColors[backgroundColor],
				genAnimation[animation],
				genBorderRadius[borderRadius],
				"skeleton",
				className,
			)}
			{...rest}
		/>
	)
}

export default Skeleton

const genAnimation: Record<LibSkeletonAnimation, string | Array<string>> = {
	none: "animate-none",
	pulse: "animate-pulse",
	shine: [
		"relative overflow-hidden",
		"before:absolute before:-top-[200px] before:-bottom-[200px] before:bg-white before:opacity-70 before:blur-[20px] before:w-[100px] before:-skew-15 before:animate-[shine_2000ms_ease-in-out_infinite]",
	],
}
