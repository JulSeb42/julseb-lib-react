import { forwardRef } from "react"
import { StyledLoaderTwo } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderTwo = forwardRef<HTMLSpanElement, ILibLoader>(
    (
        { "data-testid": testid, as, size, color, borderWidth = 8, ...rest },
        ref
    ) => {
        return (
            <StyledLoaderTwo
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
