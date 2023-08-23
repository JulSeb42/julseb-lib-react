/*=============================================== Section component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledSection } from "./styles"
import type { SectionProps } from "./types"

export const Section = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            children,
            gap = "m",
            ...rest
        }: SectionProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledSection
                data-testid={testid}
                ref={ref}
                as={as}
                $gap={gap}
                {...rest}
            >
                {children}
            </StyledSection>
        )
    }
)
