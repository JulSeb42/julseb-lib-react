import type { FC } from "react"
import { StyledSrOnly } from "./styles"
import type { ILibSrOnly } from "./types"

/**
 * SrOnly component for rendering content that is only accessible to screen readers.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - SrOnly props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {ReactNode} [props.children] - Content to be read by screen readers.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered SrOnly component.
 *
 * @see https://documentation-components-react.vercel.app/components/sr-only
 * @example
 * <SrOnly>This text is only visible to screen readers.</SrOnly>
 */
export const SrOnly: FC<ILibSrOnly> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    ...rest
}) => {
    return (
        <StyledSrOnly data-testid={testid} ref={ref} as={as} {...rest}>
            {children}
        </StyledSrOnly>
    )
}
