/*=============================================== Main component ===============================================*/

import { forwardRef } from "react"
import { StyledMain } from "./styles"
import type { ILibMain } from "./types"

/**
 * @description Returns a Main component
 * @link https://documentation-components-react.vercel.app/layouts/container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop minHeight?: string | number
 * @prop size?: "default" | "large" | "form" | "full" | number
 * @prop contentSize?: "default" | "large" | "form" | number => only if size is set to full
 */

export const Main = forwardRef<HTMLDivElement, ILibMain>(
    (
        {
            "data-testid": testid,
            as,
            children,
            size,
            contentSize,
            minHeight = "100vh",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledMain
                data-testid={testid}
                ref={ref}
                as={as}
                $size={size}
                $contentSize={contentSize}
                $minHeight={minHeight}
                {...rest}
            >
                {children}
            </StyledMain>
        )
    }
)
