/*=============================================== Image component ===============================================*/

import { forwardRef } from "react"
import { Fallback } from "../../"
import { ImageFunction } from "./ImageFunction"
import { ImgContainer, Caption } from "./styles"
import type { ImageProps } from "./types"

/**
 * @description Returns an Image component
 * @link https://documentation-components-react.vercel.app/components/image
 * @extends HTMLImageElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop borderRadius?: LibRadiusProps
 * @prop fit?: ObjectFit
 * @prop aspectRatio?: string
 * @prop fallback?: JSX.Element
 * @prop caption?: string | { text: string; textColor?: LibAllColors; background?: ImageBackgroundOverlay; as?: ElementType }
 */

export const Image = forwardRef<HTMLImageElement, ImageProps>(
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
        },
        ref
    ) => {
        const imageProps = {
            "data-testid": testid,
            ref,
            fallback,
            hasCaption: !!caption,
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
                    $width={width}
                    $height={height}
                    $borderRadius={borderRadius}
                >
                    <ImageFunction {...imageProps} />

                    <Caption
                        data-testid={testid && `${testid}.Caption`}
                        className={className && "Caption"}
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

        return <ImageFunction {...imageProps} />
    }
)
