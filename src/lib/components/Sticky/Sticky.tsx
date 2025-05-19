import type { FC } from "react"
import { StyledSticky } from "./styles"
import type { ILibSticky } from "./types"

/**
 * Sticky component for rendering content that remains fixed at the top of the viewport with customizable offset.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Sticky props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.top="s"] - Top offset for the sticky element.
 * @param {ReactNode} [props.children] - Content to render inside the sticky container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Sticky component.
 *
 * @see https://documentation-components-react.vercel.app/components/sticky
 * @example
 * <Sticky top="m">
 *   <div>Sticky content</div>
 * </Sticky>
 */
export const Sticky: FC<ILibSticky> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    top = "s",
    ...rest
}) => {
    return (
        <StyledSticky
            data-testid={testid}
            ref={ref}
            as={as}
            $top={top}
            {...rest}
        >
            {children}
        </StyledSticky>
    )
}
