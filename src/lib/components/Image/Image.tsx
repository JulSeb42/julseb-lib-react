import type { FC } from "react"
import { Fallback } from "../../"
import { ImageFunction } from "./ImageFunction"
import { ImgContainer, Caption } from "./styles"
import type { ILibImage } from "./types"

/**
 * Image component for rendering images with optional caption, aspect ratio, border radius, and fallback.
 *
 * @component
 * @extends HTMLImageElement
 * @param {Object} props - Image props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLImageElement>} [props.ref] - Ref forwarded to the image element.
 * @param {string} props.src - Image source URL.
 * @param {string} props.alt - Alternative text for the image.
 * @param {string|Object} [props.caption] - Caption for the image. String for text, or object with { text, textColor, background, as }.
 * @param {string|number} [props.width="100%"] - Width of the image.
 * @param {string|number} [props.height="auto"] - Height of the image.
 * @param {string} [props.aspectRatio] - Aspect ratio for the image (e.g., "16/9").
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius] - Border radius for the image.
 * @param {CssObjectFit} [props.fit] - Object-fit property for the image.
 * @param {JSX.Element} [props.fallback] - Fallback element to display while loading.
 * @param {CSSProperties} [props.containerStyle] - Style for the image container (only if caption is defined).
 * @param {ElementType} [props.containerAs] - Custom element type for the container (only if caption is defined).
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered Image component.
 *
 * @see https://documentation-components-react.vercel.app/components/image
 * @example
 * <Image
 *   src="/banner.jpg"
 *   alt="Banner"
 *   caption={{ text: "Banner image", textColor: "white", background: "black-50" }}
 *   width={400}
 *   height={200}
 *   aspectRatio="16/9"
 *   borderRadius="m"
 * />
 */
export const Image: FC<ILibImage> = ({
	"data-testid": testid,
	ref,
	role = "img",
	className,
	src,
	alt,
	caption,
	width = "100%",
	height = "auto",
	aspectRatio,
	borderRadius,
	fit,
	fallback = (
		<Fallback
			$aspectRatio={aspectRatio}
			$width={width}
			$height={height}
			$borderRadius={borderRadius}
		/>
	),
	containerStyle,
	containerAs,
	...rest
}) => {
	const imageProps = {
		"data-testid": testid,
		ref,
		role,
		fallback,
		caption,
		className,
		src,
		alt,
		aspectRatio,
		width,
		height,
		borderRadius,
		fit,
		...rest,
	}

	if (caption)
		return (
			<ImgContainer
				data-testid={testid}
				className={className}
				style={containerStyle}
				as={containerAs}
				role="figure"
				$width={width}
				$height={height}
				$borderRadius={borderRadius}
			>
				<ImageFunction {...imageProps} />

				<Caption
					data-testid={testid && `${testid}.Caption`}
					className={className && "Caption"}
					role="contentinfo"
					as={
						typeof caption === "object" && caption.as
							? caption.as
							: "figcaption"
					}
					$backgroundColor={
						typeof caption === "object" && caption.background
							? caption?.background
							: "black-50"
					}
					$textColor={
						typeof caption === "object" && caption.textColor
							? caption.textColor
							: "white"
					}
				>
					{typeof caption === "object" ? caption.text : caption}
				</Caption>
			</ImgContainer>
		)

	return <ImageFunction {...imageProps} />
}
