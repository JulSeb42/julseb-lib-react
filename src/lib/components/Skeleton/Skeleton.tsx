/*=============================================== Skeleton component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import {  } from "../../"

import { StyledSkeleton } from "./styles"
import type { SkeletonProps } from "./types"

export const Skeleton = forwardRef(
    (
        { "data-testid": testid, as, children, ...rest }: SkeletonProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledSkeleton data-testid={testid} ref={ref} as={as} {...rest}>
                {children}
            </StyledSkeleton>
        )
    }
)
