import type { FC } from "react"
import { StyledP } from "../styles"
import type { ILibText } from "../types"

export const P: FC<ILibText> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    color,
    linkColor,
    textAlign,
    ...rest
}) => {
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
