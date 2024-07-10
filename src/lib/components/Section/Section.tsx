/*=============================================== Section component ===============================================*/

import { forwardRef } from "react"
import { StyledSection } from "./styles"
import type { SectionProps } from "./types"

/**
 * @description Returns a Section component
 * @link https://documentation-components-react.vercel.app/layouts/section
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop gap?: LibSpacers
 */

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ "data-testid": testid, as, children, gap = "m", ...rest }, ref) => {
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
