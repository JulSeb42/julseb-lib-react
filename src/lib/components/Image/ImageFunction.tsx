/*=============================================== ImageFunction ===============================================*/

import { forwardRef, lazy, Suspense } from "react"
import type { ILibImage } from "./types"

const StyledImage = lazy(() => import("./styles"))

export const ImageFunction = forwardRef<HTMLImageElement, ILibImage>(
    (
        {
            "data-testid": testid,
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
        },
        ref
    ) => {
        return (
            <Suspense fallback={fallback}>
                <StyledImage
                    data-testid={
                        !caption ? testid : testid && `${testid}.Image`
                    }
                    className={!caption ? className : className && "Image"}
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
)
