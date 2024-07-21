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
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop backgroundColor?: Any color from the library
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
                // as={as}
                $gap={gap}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {children}
            </StyledWrapper>
        )
    }
)
