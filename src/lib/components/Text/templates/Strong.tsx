/*=============================================== Strong ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledStrong } from "../styles"
import type { TextProps } from "../types"

export const Strong = forwardRef(
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
            <StyledStrong
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledStrong>
        )
    }
)
