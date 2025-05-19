import type { FC } from "react"
import { StyledTabs } from "./styles"
import type { ILibTabsContainer } from "./types"

/**
 * TabsContainer component for wrapping tabbed content and buttons.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - TabsContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {ReactNode} [props.children] - Content to render inside the container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered TabsContainer component.
 *
 * @see https://documentation-components-react.vercel.app/components/tabs
 * @example
 * <TabsContainer>
 *   {children}
 * </TabsContainer>
 */
export const TabsContainer: FC<ILibTabsContainer> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    ...rest
}) => {
    return (
        <StyledTabs data-testid={testid} ref={ref} as={as} {...rest}>
            {children}
        </StyledTabs>
    )
}
