import type { FC } from "react"
import { StyledLoaderOne } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderOne: FC<ILibLoader> = (
    (
        { "data-testid": testid, ref, as, size, color, borderWidth = 8, ...rest },
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
