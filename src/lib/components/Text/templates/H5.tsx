/*=============================================== H5 ===============================================*/

import { forwardRef } from "react"
import { StyledH5 } from "../styles"
import type { TextProps } from "../types"

export const H5 = forwardRef<HTMLHeadingElement, TextProps>(
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
            <StyledH5
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
            </StyledH5>
        )
    }
)
