import { type FC } from "react"
import { generateNumbers } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import { useTouchScreen } from "../../hooks"
import type { ILibSlideshowPagination } from "./subtypes"
import type { LibColorsHover } from "../../types"

export const SlideshowPagination: FC<ILibSlideshowPagination> = ({
	className,
	pagination,
	images,
	active,
	setActive,
	contentLength,
}) => {
	const isTouchScreen = useTouchScreen()

	if ((isTouchScreen && pagination?.hideOnTouch) || contentLength === 0)
		return null

	return (
		<div
			className={clsx(
				"flex justify-center gap-2 mx-auto px-2 w-full max-w-[70%]",
				pagination?.position === "outside"
					? ""
					: "absolute bottom-1 left-[50%] -translate-x-[50%]",
				"slideshow-controls",
				className,
			)}
		>
			{pagination?.type === "thumbnails"
				? images?.map((image, i) => (
						<button
							className={clsx(
								"opacity-50 size-12",
								"hover:opacity-70",
								"[&.active]:opacity-100 [&.active]:hover:opacity-70",
								active === i && "active",
								"slideshow-thumbnail-container",
							)}
							onClick={() => setActive(i)}
							key={i}
						>
							<img
								src={image}
								className={clsx(
									"w-full h-full object-cover",
									"slideshow-thumbnail",
								)}
							/>
						</button>
					))
				: generateNumbers(0, contentLength - 1).map(n => (
						<button
							key={n}
							className={clsx(
								"",
								pagination?.type === "dots-outline"
									? outlineColor[
											pagination?.color ?? "primary"
										]
									: genBgColor[
											pagination?.color ?? "primary"
										],
								active === n && "active",
								pagination?.type === "dots" && [
									"size-2 rounded-full block",
								],
								pagination?.type === "dots-outline" && [
									"size-2 rounded-full border-1",
								],
								pagination?.type === "bars" && [
									"grow h-1 rounded-full",
								],
								"slideshow-control",
							)}
							onClick={() => setActive(n)}
						/>
					))}
		</div>
	)
}

const genBgColor: Record<LibColorsHover, string> = {
	primary:
		"bg-primary-300 hover:bg-primary-500 active:bg-primary-600 [&.active]:bg-primary-500 [&.active]:hover:bg-primary-300",
	secondary:
		"bg-secondary-300 hover:bg-secondary-500 active:bg-secondary-600 [&.active]:bg-secondary-500 [&.active]:hover:bg-secondary-300",
	success:
		"bg-success-300 hover:bg-success-500 active:bg-success-600 [&.active]:bg-success-500 [&.active]:hover:bg-success-300",
	danger: "bg-danger-300 hover:bg-danger-500 active:bg-danger-600 [&.active]:bg-danger-500 [&.active]:hover:bg-danger-300",
	warning:
		"bg-warning-300 hover:bg-warning-500 active:bg-warning-600 [&.active]:bg-warning-500 [&.active]:hover:bg-warning-300",
	gray: "bg-gray-300 hover:bg-gray-500 active:bg-gray-600 [&.active]:bg-gray-500 [&.active]:hover:bg-gray-300",
	white: "bg-gray-200 hover:bg-gray-300 active:bg-gray-100 [&.active]:bg-white [&.active]:hover:bg-gray-100",
}

const outlineColor: Record<LibColorsHover, string> = {
	primary:
		"border-primary-500 hover:border-primary-300 active:border-primary-600 [&.active]:bg-primary-500 [&.active]:hover:bg-primary-300 [&.active]:active:bg-primary-600",
	secondary:
		"border-secondary-500 hover:border-secondary-300 active:border-secondary-600 [&.active]:bg-secondary-500 [&.active]:hover:bg-secondary-300 [&.active]:active:bg-secondary-600",
	success:
		"border-success-500 hover:border-success-300 active:border-success-600 [&.active]:bg-success-500 [&.active]:hover:bg-success-300 [&.active]:active:bg-success-600",
	danger: "border-danger-500 hover:border-danger-300 active:border-danger-600 [&.active]:bg-danger-500 [&.active]:hover:bg-danger-300 [&.active]:active:bg-danger-600",
	warning:
		"border-warning-500 hover:border-warning-300 active:border-warning-600 [&.active]:bg-warning-500 [&.active]:hover:bg-warning-300 [&.active]:active:bg-warning-600",
	gray: "border-gray-500 hover:border-gray-300 active:border-gray-600 [&.active]:bg-gray-500 [&.active]:hover:bg-gray-300 [&.active]:active:bg-gray-600",
	white: "border-white hover:border-gray-300 active:border-gray-100 [&.active]:bg-white [&.active]:hover:bg-gray-300 [&.active]:active:bg-gray-100",
}
