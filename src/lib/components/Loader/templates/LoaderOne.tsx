/*=============================================== LoaderOne ===============================================*/

import { forwardRef } from "react"
import { StyledLoaderOne } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderOne = forwardRef<HTMLSpanElement, ILibLoader>(
    (
        { "data-testid": testid, as, size, color, borderWidth = 8, ...rest },
        ref
    ) => {
        return (
            <StyledLoaderOne
                data-testid={testid}
                ref={ref}
                as={as}
                $size={size}
                $color={color}
                $borderWidth={borderWidth}
                {...rest}
            />
        )
    }
)
