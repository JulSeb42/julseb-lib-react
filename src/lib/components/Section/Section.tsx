/*=============================================== Section component ===============================================*/

import { forwardRef } from "react"
import { StyledSection } from "./styles"
import type { ILibSection } from "./types"

/**
 * @description Returns a Section component
 * @link https://documentation-components-react.vercel.app/layouts/section
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const Section = forwardRef<HTMLDivElement, ILibSection>(
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
