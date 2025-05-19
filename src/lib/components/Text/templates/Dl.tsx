import type { FC } from "react"
import { StyledDl } from "../styles"
import type { ILibText } from "../types"

export const Dl: FC<ILibText> = ({
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
