import { forwardRef } from "react"
import { StyledLoaderThree } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderThree = forwardRef<HTMLSpanElement, ILibLoader>(
    (
        { "data-testid": testid, as, size, color, borderWidth = 8, ...rest },
        ref
    ) => {
        return (
            <StyledLoaderThree
                data-testid={testid}
                ref={ref}
                as={as}
                $size={size}
                $color={color}
                $borderWidth={borderWidth}
                {...rest}
            >
                <span />
                <span />
                <span />
                <span />
            </StyledLoaderThree>
        )
    }
)
