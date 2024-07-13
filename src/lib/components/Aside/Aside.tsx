/*=============================================== Aside component ===============================================*/

import { forwardRef } from "react"
import { StyledAside } from "./styles"
import type { ILibAside } from "./types"

/**
 * @description Returns an Aside component
 * @link https://documentation-components-react.vercel.app/layouts/container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const Aside = forwardRef<HTMLDivElement, ILibAside>(
    (
        {
            "data-testid": testid,
            as,
            children,
            size,
            minHeight = "100vh",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledAside
                data-testid={testid}
                ref={ref}
                as={as}
                $size={size}
                $minHeight={minHeight}
                {...rest}
            >
                {children}
            </StyledAside>
        )
    }
)
