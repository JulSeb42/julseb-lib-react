/*=============================================== Dl ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledDl } from "../styles"
import type { TextProps } from "../types"

export const Dl = forwardRef(
    (
        {
            as,
            "data-testid": testid,
            children,
            color,
            linkColor,
            textAlign,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLDListElement>
    ) => {
        return (
            <StyledDl
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledDl>
        )
    }
)
