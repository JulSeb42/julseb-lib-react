/*=============================================== Skeleton component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

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

export const SkeletonCard = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            className,
            width,
            maxWidth,
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
        }: SkeletonCardProps,
        ref?: ForwardedRef<HTMLDivElement>
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
                        className={className && `${className}__Shine`}
                    />
                )}
            </StyledSkeletonCard>
        )
    }
)

export const SkeletonShine = forwardRef(
    (
        { "data-testid": testid, as, ...rest }: SkeletonShineProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
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

export const Skeleton = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            width,
            maxWidth,
            height,
            backgroundColor = "gray-100",
            aspectRatio,
            borderRadius,
            flex,
            flexGrow,
            animation,
            ...rest
        }: SkeletonProps,
        ref?: ForwardedRef<HTMLDivElement>
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
