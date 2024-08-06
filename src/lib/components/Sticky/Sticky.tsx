/*=============================================== Sticky component ===============================================*/

import { forwardRef } from "react"
import { StyledSticky } from "./styles"
import type { ILibSticky } from "./types"

/**
 * @description Returns a Sticky component
 * @link https://documentation-components-react.vercel.app/components/sticky
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */
export const Sticky = forwardRef<HTMLDivElement, ILibSticky>(
    ({ "data-testid": testid, as, children, top = "s", ...rest }, ref) => {
        return (
            <StyledSticky
                data-testid={testid}
                ref={ref}
                as={as}
                $top={top}
                {...rest}
            >
                {children}
            </StyledSticky>
        )
    }
)
