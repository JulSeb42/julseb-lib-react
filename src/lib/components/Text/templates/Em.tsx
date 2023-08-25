/*=============================================== Em ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledEm } from "../styles"
import type { TextProps } from "../types"

export const Em = forwardRef(
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
            <StyledEm
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledEm>
        )
    }
)
