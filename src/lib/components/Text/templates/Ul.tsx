/*=============================================== Ul ===============================================*/

import { forwardRef } from "react"
import { StyledUl } from "../styles"
import type { TextProps } from "../types"

export const Ul = forwardRef<HTMLUListElement, TextProps>(
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
            <StyledUl
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledUl>
        )
    }
)
