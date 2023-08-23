/*=============================================== Ol ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledOl } from "../styles"
import type { TextProps } from "../types"

export const Ol = forwardRef(
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
        ref?: ForwardedRef<HTMLOListElement>
    ) => {
        return (
            <StyledOl
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledOl>
        )
    }
)
