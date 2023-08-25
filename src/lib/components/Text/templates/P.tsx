/*=============================================== P ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledP } from "../styles"
import type { TextProps } from "../types"

export const P = forwardRef(
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
            <StyledP
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledP>
        )
    }
)
