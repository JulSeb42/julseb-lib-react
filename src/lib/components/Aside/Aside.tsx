/*=============================================== Aside component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledAside } from "./styles"
import type { AsideProps } from "./types"

export const Aside = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            children,
            size,
            minHeight = "100vh",
            ...rest
        }: AsideProps,
        ref?: ForwardedRef<HTMLDivElement>
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
