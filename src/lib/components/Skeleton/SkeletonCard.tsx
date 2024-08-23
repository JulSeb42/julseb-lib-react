/*=============================================== SkeletonCard component ===============================================*/

import { forwardRef } from "react"
import { SkeletonShine } from "./SkeletonShine"
import { StyledSkeletonCard } from "./styles"
import type { ILibSkeletonCard } from "./types"

/**
 * @description Returns a SkeletonCard component
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const SkeletonCard = forwardRef<HTMLDivElement, ILibSkeletonCard>(
    (
        {
            "data-testid": testid,
            as,
            className,
            width,
            maxWidth = "100%",
            height,
            backgroundColor,
            aspectRatio,
            border,
            borderRadius,
            flex,
            flexGrow,
            padding,
            isShiny,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledSkeletonCard
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $width={width}
                $maxWidth={maxWidth}
                $height={height}
                $backgroundColor={backgroundColor}
                $aspectRatio={aspectRatio}
                $border={border}
                $borderRadius={borderRadius}
                $flex={flex}
                $flexGrow={flexGrow}
                $padding={padding}
                {...rest}
            >
                {children}

                {isShiny && (
                    <SkeletonShine
                        data-testid={testid && `${testid}.Shine`}
                        className={className && "Shine"}
                    />
                )}
            </StyledSkeletonCard>
        )
    }
)
