/*=============================================== Wrapper component ===============================================*/

import { forwardRef } from "react"
import { StyledWrapper } from "./styles"
import type { WrapperProps } from "./types"

/**
 * @description Returns a Wrapper component
 * @link https://documentation-components-react.vercel.app/layouts/container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop gap?: LibSpacers
 */

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
    ({ "data-testid": testid, as, children, gap = "l", ...rest }, ref) => {
        return (
            <StyledWrapper
                data-testid={testid}
                ref={ref}
                as={as}
                $gap={gap}
                {...rest}
            >
                {children}
            </StyledWrapper>
        )
    }
)
