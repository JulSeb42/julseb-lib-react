/*=============================================== Dl ===============================================*/

import { forwardRef } from "react"
import { StyledDl } from "../styles"
import type { TextProps } from "../types"

export const Dl = forwardRef<HTMLDListElement, TextProps>(
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
            <StyledDl
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledDl>
        )
    }
)
