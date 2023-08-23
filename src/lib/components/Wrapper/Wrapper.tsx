/*=============================================== Wrapper component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledWrapper } from "./styles"
import type { WrapperProps } from "./types"

export const Wrapper = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            children,
            ...rest
        }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledWrapper
                data-testid={testid}
                ref={ref}
                as={as}
                {...rest}
            >
                {children}
            </StyledWrapper>
        )
    }
)
