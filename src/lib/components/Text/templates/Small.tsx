/*=============================================== Small ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledSmall } from "../styles"
import type { TextProps } from "../types"

export const Small = forwardRef(
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
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <StyledSmall
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledSmall>
        )
    }
)
