/*=============================================== Image component ===============================================*/

import { forwardRef, type ForwardedRef, lazy, Suspense } from "react"

import { Fallback } from "../../"

import { ImgContainer, Caption } from "./styles"
import type { ImageProps } from "./types"

const StyledImage = lazy(() => import("./styles"))

export const Image = forwardRef(
    (
        {
            "data-testid": testid,
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
            ...rest
        }: ImageProps,
        ref?: ForwardedRef<HTMLImageElement>
    ) => {
        const img = () => (
            <Suspense fallback={fallback}>
                <StyledImage
                    data-testid={
                        !caption ? testid : testid && `${testid}.Image`
                    }
                    className={
                        !caption
                            ? className
                            : className && `${className}__Image`
                    }
                    ref={ref}
                    src={src}
                    alt={alt}
                    $aspectRatio={aspectRatio}
                    $width={width}
                    $height={height}
                    $borderRadius={borderRadius}
                    $fit={fit}
                    {...rest}
                />
            </Suspense>
        )

        if (caption)
            return (
                <ImgContainer
                    data-testid={testid}
                    className={className}
                    $width={width}
                    $height={height}
                    $borderRadius={borderRadius}
                >
                    {img()}

                    <Caption
                        data-testid={testid && `${testid}.Caption`}
                        className={className && `${className}__Caption`}
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
                        as={
                            typeof caption === "object" && caption.as
                                ? caption.as
                                : "figcaption"
                        }
                    >
                        {typeof caption === "object" ? caption.text : caption}
                    </Caption>
                </ImgContainer>
            )

        return img()
    }
)
