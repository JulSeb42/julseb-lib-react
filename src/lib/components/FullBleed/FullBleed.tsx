import type { FC } from "react"
import { StyledFullBleed } from "./styles"
import type { ILibFullBleed } from "./types"

/**
 * FullBleed component for rendering a full-width section with optional height, aspect ratio, and padding.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - FullBleed props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {number|string} [props.height] - Height of the full-bleed section.
 * @param {string} [props.aspectRatio] - Aspect ratio for the section (e.g., "16/9").
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding] - Padding for the section.
 * @param {ReactNode} [props.children] - Content to display inside the section.
 * @returns {JSX.Element} The rendered FullBleed component.
 *
 * @example
 * <FullBleed height="300px" aspectRatio="16/9" padding="l">
 *   <img src="/banner.jpg" alt="Banner" />
 * </FullBleed>
 */
export const FullBleed: FC<ILibFullBleed> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    height,
    aspectRatio,
    padding,
    ...rest
}) => {
    return (
        <StyledFullBleed
            data-testid={testid}
            ref={ref}
            as={as}
            $height={height}
            $aspectRatio={aspectRatio}
            $padding={padding}
            {...rest}
        >
            {children}
        </StyledFullBleed>
    )
}
