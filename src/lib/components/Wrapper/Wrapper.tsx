/*=============================================== Wrapper component ===============================================*/

import { forwardRef } from "react"
import { StyledWrapper } from "./styles"
import type { ILibWrapper } from "./types"

/**
 * @description Returns a Wrapper component
 * @link https://documentation-components-react.vercel.app/layouts/container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Wrapper = forwardRef<HTMLDivElement, ILibWrapper>(
    (
        {
            "data-testid": testid,
            as,
            children,
            gap = "l",
            backgroundColor = "transparent",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledWrapper
                data-testid={testid}
                ref={ref}
                as={as}
                $gap={gap}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {children}
            </StyledWrapper>
        )
    }
)
