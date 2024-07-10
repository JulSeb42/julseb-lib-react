/*=============================================== Em ===============================================*/

import { forwardRef } from "react"
import { StyledEm } from "../styles"
import type { TextProps } from "../types"

export const Em = forwardRef<HTMLParagraphElement, TextProps>(
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
