/*=============================================== LoaderFour ===============================================*/

import { forwardRef } from "react"
import { StyledLoaderFour } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderFour = forwardRef<HTMLSpanElement, ILibLoader>(
    ({ "data-testid": testid, as, size, color, ...rest }, ref) => {
        return (
            <StyledLoaderFour
                data-testid={testid}
                ref={ref}
                as={as}
                $size={size}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
            </StyledLoaderFour>
        )
    }
)
