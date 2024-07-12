/*=============================================== Small ===============================================*/

import { forwardRef } from "react"
import { StyledSmall } from "../styles"
import type { ILibText } from "../types"

export const Small = forwardRef<HTMLParagraphElement, ILibText>(
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
            <StyledSmall
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledSmall>
        )
    }
)
