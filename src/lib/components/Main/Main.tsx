/*=============================================== Main component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledMain } from "./styles"
import type { MainProps } from "./types"

export const Main = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            children,
            size,
            contentSize,
            minHeight = "100vh",
            ...rest
        }: MainProps,
        ref?: ForwardedRef<HTMLDivElement>
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
