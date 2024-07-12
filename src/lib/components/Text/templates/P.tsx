/*=============================================== P ===============================================*/

import { forwardRef } from "react"
import { StyledP } from "../styles"
import type { ILibText } from "../types"

export const P = forwardRef<HTMLParagraphElement, ILibText>(
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
            <StyledP
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledP>
        )
    }
)
