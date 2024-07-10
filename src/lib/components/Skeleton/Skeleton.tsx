/*=============================================== Skeleton component ===============================================*/

import { forwardRef } from "react"
import {
    StyledSkeletonCard,
    StyledSkeletonShine,
    StyledSkeleton,
} from "./styles"
import type {
    SkeletonCardProps,
    SkeletonShineProps,
    SkeletonProps,
} from "./types"

/**
 * @description Returns a SkeletonCard component
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends FlexboxProps
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop width?: string | number
 * @prop maxWidth?: string | number
 * @prop height?: string | number
 * @prop backgroundColor?: LibAllColors
 * @prop aspectRatio?: string
 * @prop borderRadius?: LibRadiusProps
 * @prop flex?: string | number
 * @prop flexGrow?: string | number
 * @prop border?: LibBorderProps
 * @prop padding?: LibPaddingProps
 * @prop isShiny?: boolean
 */

export const SkeletonCard = forwardRef<HTMLDivElement, SkeletonCardProps>(
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

/**
 * @description Returns a Shine component. Add it inside a component with `position: relative`
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const SkeletonShine = forwardRef<HTMLSpanElement, SkeletonShineProps>(
    ({ "data-testid": testid, as, ...rest }, ref) => {
        return (
            <StyledSkeletonShine
                data-testid={testid}
                ref={ref}
                as={as}
                {...rest}
            />
        )
    }
)

/**
 * @description Returns a Skeleton component
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop width?: string | number
 * @prop maxWidth?: string | number
 * @prop height?: string | number
 * @prop backgroundColor?: LibAllColors
 * @prop aspectRatio?: string
 * @prop borderRadius?: LibRadiusProps
 * @prop flex?: string | number
 * @prop flexGrow?: string | number
 * @prop animation?: "shine" | "pulse"
 */

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
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
