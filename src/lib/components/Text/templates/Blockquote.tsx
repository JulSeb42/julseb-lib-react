import { forwardRef } from "react"
import { StyledBlockquote } from "../styles"
import type { ILibText } from "../types"

export const Blockquote = forwardRef<HTMLQuoteElement, ILibText>(
    (
        {
            as,
            "data-testid": testid,
            children,
            color,
            linkColor,
            textAlign,
            ...rest
        },
        ref
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
