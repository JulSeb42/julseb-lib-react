import type { FC } from "react"
import { StyledSection } from "./styles"
import type { ILibSection } from "./types"

/**
 * Section component for rendering a layout section with customizable gap and element type.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Section props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="m"] - Gap between elements in the section.
 * @param {ReactNode} [props.children] - Section content.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Section component.
 *
 * @see https://documentation-components-react.vercel.app/layouts/section
 * @example
 * <Section gap="l">
 *   <h2>Section Title</h2>
 *   <p>Section content goes here.</p>
 * </Section>
 */
export const Section: FC<ILibSection> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    gap = "m",
    ...rest
}) => {
    return (
        <StyledSection
            data-testid={testid}
            ref={ref}
            as={as}
            $gap={gap}
            {...rest}
        >
            {children}
        </StyledSection>
    )
}
