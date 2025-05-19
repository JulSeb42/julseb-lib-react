import type { FC } from "react"
import { StyledSkeleton } from "./styles"
import type { ILibSkeleton } from "./types"

/**
 * Skeleton component for displaying a loading placeholder with customizable size, color, border radius, and animation.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Skeleton props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string|number} [props.width=100] - Width of the skeleton.
 * @param {string|number} [props.maxWidth="100%"] - Maximum width of the skeleton.
 * @param {string|number} [props.height=100] - Height of the skeleton.
 * @param {string} [props.backgroundColor="gray-100"] - Background color of the skeleton.
 * @param {string} [props.aspectRatio] - Aspect ratio of the skeleton.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }} [props.borderRadius] - Border radius of the skeleton.
 * @param {string|number} [props.flex] - Flex property for the skeleton.
 * @param {string|number} [props.flexGrow] - Flex grow property for the skeleton.
 * @param {"pulse" | "shine"} [props.animation] - Animation type for the skeleton.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Skeleton component.
 *
 * @see https://documentation-components-react.vercel.app/components/skeleton
 * @example
 * <Skeleton width={200} height={24} animation="pulse" />
 */
export const Skeleton: FC<ILibSkeleton> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
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
