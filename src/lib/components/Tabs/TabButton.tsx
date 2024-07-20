/*=============================================== TabButton component ===============================================*/

import { forwardRef } from "react"
import { StyledTabButton } from "./styles"
import type { ILibTabButton } from "./types"

/**
 * @description Returns a TabButton component
 * @link https://documentation-components-react.vercel.app/components/tabs
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop isActive: boolean
 * @prop onClick: () => void
 * @prop justify?: "start" | "stretch"
 * @prop variant?: "basic" | "rounded"
 */

export const TabButton = forwardRef<HTMLButtonElement, ILibTabButton>(
    (
        {
            "data-testid": testid,
            as,
            children,
            justify = "start",
            variant = "basic",
            isActive,
            onClick,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledTabButton
                data-testid={testid}
                ref={ref}
                as={as}
                onClick={onClick}
                $isActive={isActive}
                $justify={justify}
                $variant={variant}
                {...rest}
            >
                {children}
            </StyledTabButton>
        )
    }
)
