import type { FC } from "react"
import { StyledAside } from "./styles"
import type { ILibAside } from "./types"

/**
 * Aside component for displaying complementary content.
 *
 * @component
 * @param {Object} props - Aside props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"default" | "small" | number} [props.size] - Size of the aside.
 * @param {ReactNode} [props.children] - Content of the aside.
 * @returns {JSX.Element} The rendered Aside component.
 *
 * @example
 * <Aside size="small" minHeight="50vh">
 *   Sidebar content here
 * </Aside>
 */
export const Aside: FC<ILibAside> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    size,
    ...rest
}) => {
    return (
        <StyledAside
            data-testid={testid}
            ref={ref}
            as={as}
            $size={size}
            {...rest}
        >
            {children}
        </StyledAside>
    )
}
