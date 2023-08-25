/*=============================================== H6 ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledH6 } from "../styles"
import type { TextProps } from "../types"

export const H6 = forwardRef(
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
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH6
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledH6>
        )
    }
)
