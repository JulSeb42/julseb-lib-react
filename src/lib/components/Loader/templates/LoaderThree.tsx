import type { FC } from "react"
import { StyledLoaderThree } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderThree: FC<ILibLoader> = ({
    "data-testid": testid,
    ref,
    as,
    size,
    color,
    borderWidth = 8,
    ...rest
}) => {
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
