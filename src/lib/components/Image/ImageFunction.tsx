import { lazy, Suspense, type FC } from "react"
import type { ILibImage } from "./types"

const StyledImage = lazy(() => import("./styles"))

export const ImageFunction: FC<ILibImage> = ({
	"data-testid": testid,
	ref,
	role = "img",
	fallback,
	caption,
	className,
	src,
	alt,
	aspectRatio,
	width = "100%",
	height = "auto",
	borderRadius,
	fit,
	loading = "lazy",
	imgFallback,
	...rest
}) => {
	return (
		<Suspense fallback={fallback}>
			<StyledImage
				data-testid={!caption ? testid : testid && `${testid}.Image`}
				className={!caption ? className : className && "Image"}
				role={role}
				ref={ref}
				src={src}
				alt={alt}
				loading={loading}
				data-fallback={imgFallback?.text}
				$aspectRatio={aspectRatio}
				$width={width}
				$height={height}
				$borderRadius={borderRadius}
				$fit={fit}
				$fallbackBackground={imgFallback?.background ?? "primary"}
				$fallbackTextColor={imgFallback?.textColor ?? "background"}
				$fallbackFontSize={imgFallback?.fontSize ?? "body"}
				{...rest}
			/>
		</Suspense>
	)
}
