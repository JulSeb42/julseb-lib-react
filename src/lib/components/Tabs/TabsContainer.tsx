import { forwardRef } from "react"
import { StyledTabs } from "./styles"
import type { ILibTabsContainer } from "./types"

/**
 * @description Returns a TabsContainer component
 * @link https://documentation-components-react.vercel.app/components/tabs
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const TabsContainer = forwardRef<HTMLDivElement, ILibTabsContainer>(
    ({ "data-testid": testid, as, children, ...rest }, ref) => {
        return (
            <StyledTabs data-testid={testid} ref={ref} as={as} {...rest}>
                {children}
            </StyledTabs>
        )
    }
)
