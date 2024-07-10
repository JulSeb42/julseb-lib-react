/*=============================================== H1 ===============================================*/

import { forwardRef } from "react"
import { StyledH1 } from "../styles"
import type { TextProps } from "../types"

export const H1 = forwardRef<HTMLHeadingElement, TextProps>(
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
        },
        ref
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
