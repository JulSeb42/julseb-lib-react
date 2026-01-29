import { type FC } from "react"
import {
	clsx,
	genBorderRadius,
	genBgAllColorsAndOverlays,
	genTextAllColor,
	genObjectFit,
} from "../../utils"
import type { ILibImage } from "./types"

/**
 * Image component for displaying images with optional styling, captions, and accessibility features.
 *
 * @component
 *
 * @example
 * <Image src="https://example.com/image.jpg" alt="Example image" borderRadius="lg" fit="cover" caption="Example caption" />
 *
 * @extends HTMLImageElement
 *
 * @prop {string} [className] - Additional class names to apply to the image or figure element.
 * @prop {React.RefObject<HTMLImageElement | HTMLFigureElement>} [ref] - Ref for the image or figure element.
 * @prop {string | { text: string, backgroundColor?: LibAllColorsAndOverlays, textColor?: LibAllColors, imgClasses?: string, captionClasses?: string }} [caption] - Caption for the image. Can be a string or an object with text and optional styling.
 * @prop {LibRadiuses} [borderRadius] - Border radius for the image or figure.
 * @prop {"contain" | "cover" | "fill" | "none" | "scale-down"} [fit] - How the image should fit within its container.
 *
 * @returns {JSX.Element} The rendered Image component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/image
 */
export const Image: FC<ILibImage> = ({
	className,
	ref,
	caption,
	borderRadius,
	fit,
	alt,
	...rest
}) => {
	const Element = caption ? "figure" : "img"

	if (caption) {
		return (
			<Element
				ref={ref}
				className={clsx(
					"relative overflow-hidden image-container",
					borderRadius && genBorderRadius[borderRadius],
					className,
				)}
			>
				<img
					className={clsx(
						"z-0 relative",
						fit && genObjectFit[fit],
						typeof caption === "object" && caption.imgClasses,
						"image",
					)}
					alt={alt}
					{...rest}
				/>

				<figcaption
					className={clsx(
						"bottom-0 left-0 z-10 absolute bg-overlay-black-80 px-4 py-2 w-full text-white",
						typeof caption === "object" &&
							caption.backgroundColor &&
							genBgAllColorsAndOverlays[caption.backgroundColor],
						typeof caption === "object" &&
							caption.textColor &&
							genTextAllColor[caption.textColor],
						typeof caption === "object" && caption.captionClasses,
						"figcaption",
					)}
				>
					{typeof caption === "object" ? caption.text : caption}
				</figcaption>
			</Element>
		)
	}

	return (
		<Element
			ref={ref}
			className={clsx(
				borderRadius && genBorderRadius[borderRadius],
				fit && genObjectFit[fit],
				className,
				"image",
			)}
			{...rest}
		/>
	)
}
