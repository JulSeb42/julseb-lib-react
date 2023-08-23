/*=============================================== H2 ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledH2 } from "../styles"
import type { TextProps } from "../types"

export const H2 = forwardRef(
    (
        {
            as,
            "data-testid": testid,
            children,
            color,
            linkColor,
            textAlign,
            display,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <StyledH2
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                $display={display}
                {...rest}
            >
                {children}
            </StyledH2>
        )
    }
)
