/*=============================================== SkeletonShine component ===============================================*/

import { forwardRef } from "react"
import { StyledSkeletonShine } from "./styles"
import type { ILibSkeletonShine } from "./types"

/**
 * @description Returns a Shine component. Add it inside a component with `position: relative`
 * @link https://documentation-components-react.vercel.app/components/skeleton
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const SkeletonShine = forwardRef<HTMLSpanElement, ILibSkeletonShine>(
    ({ "data-testid": testid, as, ...rest }, ref) => {
        return (
            <StyledSkeletonShine
                data-testid={testid}
                ref={ref}
                as={as}
                {...rest}
            />
        )
    }
)
