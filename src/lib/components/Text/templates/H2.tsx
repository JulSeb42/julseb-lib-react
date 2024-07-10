/*=============================================== H2 ===============================================*/

import { forwardRef } from "react"
import { StyledH2 } from "../styles"
import type { TextProps } from "../types"

export const H2 = forwardRef<HTMLHeadingElement, TextProps>(
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
