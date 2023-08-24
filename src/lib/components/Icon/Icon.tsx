/*=============================================== Icon component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

export const Icon = forwardRef(
    (
        {
            "data-testid": testid,
            src,
            size = 32,
            color = "currentColor",
            ...rest
        }: IconProps,
        ref?: ForwardedRef<SVGElement>,
    ) => {
        return (
            <StyledIcon
                data-testid={testid}
                innerRef={ref}
                src={`/icons/${src}.svg`}
                $size={size}
                $color={color}
                {...rest}
            />
        )
    },
)
