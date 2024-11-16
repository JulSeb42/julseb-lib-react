/*=============================================== H4 ===============================================*/

import { forwardRef } from "react"
import { StyledH4 } from "../styles"
import type { ILibText } from "../types"

export const H4 = forwardRef<HTMLHeadingElement, ILibText>(
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
            <StyledH4
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
            </StyledH4>
        )
    }
)
