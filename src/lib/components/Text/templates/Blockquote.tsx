import type { FC } from "react"
import { StyledBlockquote } from "../styles"
import type { ILibText } from "../types"

export const Blockquote: FC<ILibText> = ({
    "data-testid": testid,
    ref,
    as,
    children,
    color,
    linkColor,
    textAlign,
    ...rest
}) => {
    return (
        <StyledBlockquote
            data-testid={testid}
            ref={ref}
            as={as}
            $color={color}
            $linkColor={linkColor}
            $textAlign={textAlign}
            {...rest}
        >
            {children}
        </StyledBlockquote>
    )
}
