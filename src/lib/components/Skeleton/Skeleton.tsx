/*=============================================== Skeleton component ===============================================*/

import { forwardRef } from "react"
import { StyledSkeleton } from "./styles"
import type { ILibSkeleton } from "./types"

/**
 * @description Returns a Skeleton component
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Skeleton = forwardRef<HTMLDivElement, ILibSkeleton>(
    (
        {
            "data-testid": testid,
            as,
            width = 100,
            maxWidth = "100%",
            height = 100,
            backgroundColor = "gray-100",
            aspectRatio,
            borderRadius,
            flex,
            flexGrow,
            animation,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledSkeleton
                data-testid={testid}
                ref={ref}
                as={as}
                $width={width}
                $maxWidth={maxWidth}
                $height={height}
                $backgroundColor={backgroundColor}
                $aspectRatio={aspectRatio}
                $borderRadius={borderRadius}
                $flex={flex}
                $flexGrow={flexGrow}
                $animation={animation}
                {...rest}
            />
        )
    }
)
