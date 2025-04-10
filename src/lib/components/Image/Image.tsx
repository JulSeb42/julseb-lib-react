import { forwardRef } from "react"
import { Fallback } from "../../"
import { ImageFunction } from "./ImageFunction"
import { ImgContainer, Caption } from "./styles"
import type { ILibImage } from "./types"

/**
 * @description Returns an Image component
 * @link https://documentation-components-react.vercel.app/components/image
 * @extends HTMLImageElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLImageElement>
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop fit?: CssObjectFit
 * @prop aspectRatio?: string
 * @prop fallback?: JSX.Element
 * @prop caption?: string | { text: string; textColor?: Any color from the library; background?: Any color or overlay from the library, except "gradient-black" | "gradient-white"; as?: ElementType }
 * @prop containerStyle?: CSSProperties => only if caption is defined
 * @prop containerAs?: ElementType => only if caption is defined
 */
export const Image = forwardRef<HTMLImageElement, ILibImage>(
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
            containerStyle,
            containerAs,
            ...rest
        },
        ref
    ) => {
        const imageProps = {
            "data-testid": testid,
            ref,
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
                    $width={width}
                    $height={height}
                    $borderRadius={borderRadius}
                >
                    <ImageFunction {...imageProps} />

                    <Caption
                        data-testid={testid && `${testid}.Caption`}
                        className={className && "Caption"}
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
)
