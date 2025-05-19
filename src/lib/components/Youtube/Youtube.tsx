import type { FC } from "react"
import { convertYoutube } from "@julseb-lib/utils"
import { StyledYoutube } from "./styles"
import type { ILibYoutube } from "./types"

/**
 * Youtube component for embedding a YouTube video with customizable aspect ratio, width, and height.
 *
 * @component
 * @extends HTMLIframeElement
 * @param {Object} props - Youtube props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLIframeElement>} [props.ref] - Ref forwarded to the iframe element.
 * @param {string} [props.src=""] - YouTube video URL or ID.
 * @param {string|number} [props.width="100%"] - Width of the iframe.
 * @param {string|number} [props.height="auto"] - Height of the iframe.
 * @param {string} [props.aspectRatio="16/9"] - Aspect ratio for the iframe.
 * @param {any} [props.rest] - Additional props passed to the iframe element.
 * @returns {JSX.Element} The rendered Youtube component.
 *
 * @see https://documentation-components-react.vercel.app/components/youtube
 * @example
 * <Youtube src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" aspectRatio="16/9" />
 */
export const Youtube: FC<ILibYoutube> = ({
    "data-testid": testid,
    ref,
    src = "",
    width = "100%",
    height = "auto",
    aspectRatio = "16/9",
    ...rest
}) => {
    return (
        <StyledYoutube
            data-testid={testid}
            ref={ref}
            src={convertYoutube(src)}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            $width={width}
            $height={height}
            $aspectRatio={aspectRatio}
            {...rest}
        />
    )
}
