import { type FC } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { useTouchScreen } from "../../hooks"
import { clsx, genBgColorHover } from "../../utils"
import type { ILibSlideshowButton } from "./subtypes"

export const SlideshowButton: FC<ILibSlideshowButton> = ({
	className,
	controls,
	position,
	onClick,
	hideControls,
}) => {
	const isTouchScreen = useTouchScreen()

	if (hideControls || (isTouchScreen && controls?.hideOnTouch)) return null

	return (
		<button
			className={clsx(
				"top-[50%] z-10 absolute flex justify-center items-center -translate-y-[50%]",
				genBgColorHover[controls?.color ?? "primary"],
				controls?.color === "white" ? "text-primary-500" : "text-white",
				controls?.size === "large" ? "size-12" : "size-8",
				controls?.size === "large"
					? position === "left"
						? "rounded-r-md"
						: "rounded-l-md"
					: "rounded-full",
				position === "left"
					? controls?.size === "large"
						? "left-0"
						: "left-2"
					: controls?.size === "large"
						? "right-0"
						: "right-2",
				"slideshow-button",
				controls?.className,
				className,
			)}
			onClick={onClick}
			aria-label={
				position === "left"
					? (controls?.labelPrev ?? "Previous")
					: (controls?.labelNext ?? "Next")
			}
			type="button"
			role="button"
		>
			{position === "left"
				? (controls?.icons?.prev ?? (
						<BiChevronLeft
							size={controls?.size === "small" ? 24 : 32}
						/>
					))
				: (controls?.icons?.next ?? (
						<BiChevronRight
							size={controls?.size === "small" ? 24 : 32}
						/>
					))}
		</button>
	)
}
