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
 * @prop width?: string | number
 * @prop maxWidth?: string | number
 * @prop height?: string | number
 * @prop backgroundColor?: Any color from the library
 * @prop aspectRatio?: string
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop flex?: string | number
 * @prop flexGrow?: string | number
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop isShiny?: boolean
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
