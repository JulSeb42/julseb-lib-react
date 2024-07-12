/*=============================================== Youtube component ===============================================*/

import { forwardRef } from "react"
import { convertYoutube } from "ts-utils-julseb"
import { StyledYoutube } from "./styles"
import type { ILibYoutube } from "./types"

/**
 * @description Returns a Youtube component
 * @link https://documentation-components-react.vercel.app/components/youtube
 * @extends HTMLIframeElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop width?: string | number
 * @prop height?: string | number
 * @prop aspectRatio?: string
 */

export const Youtube = forwardRef<HTMLIFrameElement, ILibYoutube>(
    (
        {
            "data-testid": testid,
            src = "",
            width = "100%",
            height = "auto",
            aspectRatio = "16/9",
            ...rest
        },
        ref
    ) => {
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
)
