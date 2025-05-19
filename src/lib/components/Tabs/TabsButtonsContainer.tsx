import type { FC } from "react"
import { StyledTabsButtonsContainer } from "./styles"
import type { ILibTabsButtonsContainer } from "./types"

/**
 * TabsButtonsContainer component for wrapping tab buttons with customizable justification and visual variant.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - TabsButtonsContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"start" | "stretch"} [props.justify="start"] - Justification of the tab buttons.
 * @param {"basic" | "rounded"} [props.variant="basic"] - Visual variant of the tab buttons.
 * @param {ReactNode} [props.children] - Tab button elements.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered TabsButtonsContainer component.
 *
 * @see https://documentation-components-react.vercel.app/components/tabs
 * @example
 * <TabsButtonsContainer justify="stretch" variant="rounded">
 *   {tabButtons}
 * </TabsButtonsContainer>
 */
export const TabsButtonsContainer: FC<ILibTabsButtonsContainer> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    justify = "start",
    variant = "basic",
    ...rest
}) => {
    return (
        <StyledTabsButtonsContainer
            data-testid={testid}
            ref={ref}
            as={as}
            $cols={(children as Array<typeof children>)?.length}
            $justify={justify}
            $variant={variant}
            {...rest}
        >
            {children}
        </StyledTabsButtonsContainer>
    )
}
