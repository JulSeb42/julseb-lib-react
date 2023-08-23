/*=============================================== Blockquote ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledBlockquote } from "../styles"
import type { TextProps } from "../types"

export const Blockquote = forwardRef(
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
        ref?: ForwardedRef<HTMLQuoteElement>
    ) => {
        return (
            <StyledBlockquote
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledBlockquote>
        )
    }
)
