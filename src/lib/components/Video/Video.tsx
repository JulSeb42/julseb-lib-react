import { Suspense, lazy, type FC } from "react"
import { Fallback } from "../../"
import type { ILibVideo } from "./types"

const StyledVideo = lazy(() => import("./styles"))

/**
 * Video component for rendering an HTML video element with customizable source, aspect ratio, fit, and fallback.
 *
 * @component
 * @extends HTMLVideoElement
 * @param {Object} props - Video props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ForwardedRef<HTMLVideoElement>} [props.ref] - Ref forwarded to the video element.
 * @param {string} props.src - Source URL of the video.
 * @param {"video/x-flv" | "video/mp4" | "application/x-mpegURL" | "video/MP2T" | "video/3gpp" | "video/quicktime" | "video/x-msvideo" | "video/x-ms-wmv"} [props.type="video/mp4"] - Video MIME type.
 * @param {string|number} [props.width="100%"] - Width of the video.
 * @param {string|number} [props.height="auto"] - Height of the video.
 * @param {CssObjectFit} [props.fit] - Object-fit style for the video.
 * @param {string} [props.aspectRatio] - Aspect ratio for the video.
 * @param {string} [props.emptyText="Your browser doesn't support the video tag."] - Fallback text if the video is not supported.
 * @param {boolean} [props.autoPlay] - Whether the video should play automatically.
 * @param {boolean} [props.muted] - Whether the video should be muted.
 * @param {boolean} [props.controls] - Whether to show video controls.
 * @param {any} [props.rest] - Additional props passed to the video element.
 * @returns {JSX.Element} The rendered Video component.
 *
 * @see https://documentation-components-react.vercel.app/components/video
 * @example
 * <Video src="/video.mp4" aspectRatio="16/9" controls />
 */
export const Video: FC<ILibVideo> = ({
    "data-testid": testid,
    ref,
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
}) => {
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
