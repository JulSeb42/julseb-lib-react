import type { FC } from "react"
import { SkeletonShine } from "./SkeletonShine"
import { StyledSkeletonCard } from "./styles"
import type { ILibSkeletonCard } from "./types"

/**
 * SkeletonCard component for displaying a card-shaped skeleton placeholder with customizable size, color, border, padding, and optional shine animation.
 *
 * @component
 * @extends ILibFlexbox
 * @param {Object} props - SkeletonCard props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string|number} [props.width] - Width of the skeleton card.
 * @param {string|number} [props.maxWidth="100%"] - Maximum width of the skeleton card.
 * @param {string|number} [props.height] - Height of the skeleton card.
 * @param {string} [props.backgroundColor] - Background color of the skeleton card.
 * @param {string} [props.aspectRatio] - Aspect ratio of the skeleton card.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }} [props.borderRadius] - Border radius of the skeleton card.
 * @param {string|number} [props.flex] - Flex property for the skeleton card.
 * @param {string|number} [props.flexGrow] - Flex grow property for the skeleton card.
 * @param {{ style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: string }} [props.border] - Border style for the skeleton card.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }} [props.padding] - Padding for the skeleton card.
 * @param {boolean} [props.isShiny] - Whether to display a shine animation.
 * @param {ReactNode} [props.children] - Content to display inside the skeleton card.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered SkeletonCard component.
 *
 * @see https://documentation-components-react.vercel.app/components/skeleton
 * @example
 * <SkeletonCard width={300} height={180} isShiny />
 */
export const SkeletonCard: FC<ILibSkeletonCard> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
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
