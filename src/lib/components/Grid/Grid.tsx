/*=============================================== Grid component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import {  } from "../../"

import { StyledGrid } from "./styles"
import type { GridProps } from "./types"

export const Grid = forwardRef(
    (
        { "data-testid": testid, as, children, ...rest }: GridProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledGrid data-testid={testid} ref={ref} as={as} {...rest}>
                {children}
            </StyledGrid>
        )
    }
)
