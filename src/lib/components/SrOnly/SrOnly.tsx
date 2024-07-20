/*=============================================== SrOnly component ===============================================*/

import { forwardRef } from "react"
import { StyledSrOnly } from "./styles"
import type { ILibSrOnly } from "./types"

/**
 * @description Returns a component only for ScreenReaders
 * @link https://documentation-components-react.vercel.app/components/sr-only
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const SrOnly = forwardRef<HTMLDivElement, ILibSrOnly>(
    ({ "data-testid": testid, as, children, ...rest }, ref) => {
        return (
            <StyledSrOnly data-testid={testid} ref={ref} as={as} {...rest}>
                {children}
            </StyledSrOnly>
        )
    }
)
