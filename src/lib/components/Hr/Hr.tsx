/*=============================================== Hr component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledHr } from "./styles"
import type { HrProps } from "./types"

export const Hr = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            height = 1,
            maxWidth = "100%",
            color = "gray-200",
            margin = "0 auto",
            isRounded,
            ...rest
        }: HrProps,
        ref?: ForwardedRef<HTMLHRElement>,
    ) => {
        return (
            <StyledHr
                data-testid={testid}
                ref={ref}
                as={as}
                $height={height}
                $maxWidth={maxWidth}
                $color={color}
                $margin={margin}
                $isRounded={isRounded}
                {...rest}
            />
        )
    },
)
