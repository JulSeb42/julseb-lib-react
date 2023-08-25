/*=============================================== H1 ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledH1 } from "../styles"
import type { TextProps } from "../types"

export const H1 = forwardRef(
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
            <StyledH1
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
            </StyledH1>
        )
    }
)
