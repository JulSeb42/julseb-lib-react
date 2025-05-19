import type { FC } from "react"
import { StyledLoaderTwo } from "../styles"
import type { ILibLoader } from "../types"

export const LoaderTwo: FC<ILibLoader> = ({
    "data-testid": testid,
    ref,
    as,
    size,
    color,
    borderWidth = 8,
    ...rest
}) => {
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
