import type { FC } from "react"
import { StyledWrapper } from "./styles"
import type { ILibWrapper } from "./types"

/**
 * Wrapper component for creating a container with customizable gap, background color, and minimum height.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Wrapper props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {React.ElementType} [props.as] - Custom element type to render as.
 * @param {React.ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="l"] - Gap between children.
 * @param {string} [props.backgroundColor="transparent"] - Background color (any color from the library).
 * @param {string|number} [props.minHeight="100svh"] - Minimum height of the container.
 * @param {React.ReactNode} [props.children] - Content to render inside the wrapper.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Wrapper component.
 *
 * @see https://documentation-components-react.vercel.app/layouts/container
 * @example
 * <Wrapper gap="m" backgroundColor="white">
 *   <div>Content</div>
 * </Wrapper>
 */
export const Wrapper: FC<ILibWrapper> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    gap = "l",
    backgroundColor = "transparent",
    minHeight = "100svh",
    ...rest
}) => {
    return (
        <StyledWrapper
            data-testid={testid}
            ref={ref}
            as={as}
            $gap={gap}
            $backgroundColor={backgroundColor}
            $minHeight={minHeight}
            {...rest}
        >
            {children}
        </StyledWrapper>
    )
}
