import { forwardRef } from "react"
import { StyledH6 } from "../styles"
import type { ILibText } from "../types"

export const H6 = forwardRef<HTMLHeadingElement, ILibText>(
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
            <StyledH6
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledH6>
        )
    }
)
