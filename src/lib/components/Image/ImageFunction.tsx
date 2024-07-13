/*=============================================== ImageFunction ===============================================*/

import { forwardRef, lazy, Suspense, type ImgHTMLAttributes } from "react"
import type { LibComponentBase, ILibRadius, CssObjectFit } from "../../types"

const StyledImage = lazy(() => import("./styles"))

interface ILibImageFn
    extends Omit<LibComponentBase<HTMLImageElement>, "as">,
        ImgHTMLAttributes<HTMLImageElement> {
    fallback?: JSX.Element
    hasCaption?: boolean
    aspectRatio?: string
    borderRadius?: ILibRadius
    fit?: CssObjectFit
    width: string | number
    height: string | number
}

export const ImageFunction = forwardRef<HTMLImageElement, ILibImageFn>(
    (
        {
            "data-testid": testid,
            fallback,
            hasCaption,
            className,
            src,
            alt,
            aspectRatio,
            width,
            height,
            borderRadius,
            fit,
            ...rest
        },
        ref
    ) => {
        return (
            <Suspense fallback={fallback}>
                <StyledImage
                    data-testid={
                        !hasCaption ? testid : testid && `${testid}.Image`
                    }
                    className={!hasCaption ? className : className && "Image"}
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
    }
)
