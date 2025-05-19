import type { FC } from "react"
import { StyledLoaderFour } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderFour: FC<ILibLoader> = ({
    "data-testid": testid,
    as,
    ref,
    size,
    color,
    ...rest
}) => {
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
