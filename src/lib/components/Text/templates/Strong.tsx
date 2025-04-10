import { forwardRef } from "react"
import { StyledStrong } from "../styles"
import type { ILibText } from "../types"

export const Strong = forwardRef<HTMLParagraphElement, ILibText>(
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
            <StyledStrong
                data-testid={testid}
                ref={ref}
                as={as}
                $color={color}
                $linkColor={linkColor}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledStrong>
        )
    }
)
