/*=============================================== Ul ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledUl } from "../styles"
import type { TextProps } from "../types"

export const Ul = forwardRef(
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
            <StyledUl
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledUl>
        )
    }
)
