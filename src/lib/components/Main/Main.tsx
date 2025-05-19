import type { FC } from "react"
import { StyledMain } from "./styles"
import type { ILibMain } from "./types"

/**
 * Main component for rendering the main content area with flexible size, content size, and minimum height options.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Main props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"default" | "large" | "form" | "full" | number} [props.size] - Size of the main container.
 * @param {"default" | "large" | "form" | number} [props.contentSize] - Content size (only if size is set to "full").
 *  * @param {ReactNode} [props.children] - Main content.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Main component.
 *
 * @see https://documentation-components-react.vercel.app/layouts/container
 * @example
 * <Main size="large" minHeight={600}>
 *   <h1>Welcome</h1>
 *   <p>This is the main content area.</p>
 * </Main>
 */
export const Main: FC<ILibMain> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    size,
    contentSize,
    ...rest
}) => {
    return (
        <StyledMain
            data-testid={testid}
            ref={ref}
            as={as}
            $size={size}
            $contentSize={contentSize}
            {...rest}
        >
            {children}
        </StyledMain>
    )
}
