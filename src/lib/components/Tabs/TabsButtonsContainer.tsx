import { forwardRef } from "react"
import { StyledTabsButtonsContainer } from "./styles"
import type { ILibTabsButtonsContainer } from "./types"

/**
 * @description Returns a TabsButtonsContainer component
 * @link https://documentation-components-react.vercel.app/components/tabs
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop justify?: "start" | "stretch"
 * @prop variant?: "basic" | "rounded"
 */
export const TabsButtonsContainer = forwardRef<
    HTMLDivElement,
    ILibTabsButtonsContainer
>(
    (
        {
            "data-testid": testid,
            as,
            children,
            justify = "start",
            variant = "basic",
            ...rest
        },
        ref
    ) => {
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
)
