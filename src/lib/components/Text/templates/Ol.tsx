/*=============================================== Ol ===============================================*/

import { forwardRef } from "react"
import { StyledOl } from "../styles"
import type { ILibText } from "../types"

export const Ol = forwardRef<HTMLOListElement, ILibText>(
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
            <StyledOl
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledOl>
        )
    }
)
