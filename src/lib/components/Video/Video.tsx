/*=============================================== Video component ===============================================*/

import { forwardRef, Suspense, lazy } from "react"
import { Fallback } from "../../"
import type { ILibVideo } from "./types"

const StyledVideo = lazy(() => import("./styles"))

/**
 * @description Returns an HTML Video component
 * @link https://documentation-components-react.vercel.app/components/video
 * @extends HTMLVideoElement
 * @prop data-testid?: string
 * @prop fit?: CssObjectFit
 * @prop aspectRatio?: string
 * @prop emptyText?: string
 * @prop type?: "video/x-flv" | "video/mp4" | "application/x-mpegURL" | "video/MP2T" | "video/3gpp" | "video/quicktime" | "video/x-msvideo" | "video/x-ms-wmv"
 */
export const Video = forwardRef<HTMLVideoElement, ILibVideo>(
    (
        {
            "data-testid": testid,
            src,
            type = "video/mp4",
            width = "100%",
            height = "auto",
            fit,
            aspectRatio,
            emptyText = "Your browser doesn't support the video tag.",
            autoPlay,
            muted,
            controls,
            ...rest
        },
        ref
    ) => {
        return (
            <Suspense
                fallback={
                    <Fallback
                        $width={width}
                        $height={height}
                        $aspectRatio={aspectRatio}
                    />
                }
            >
                <StyledVideo
                    data-testid={testid}
                    ref={ref}
                    autoPlay={autoPlay}
                    muted={muted || autoPlay}
                    controls={controls || !autoPlay}
                    $width={width}
                    $height={height}
                    $aspectRatio={aspectRatio}
                    $fit={fit}
                    {...rest}
                >
                    <source src={src} type={type} />
                    {emptyText}
                </StyledVideo>
            </Suspense>
        )
    }
)
