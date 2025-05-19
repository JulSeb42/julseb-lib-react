import type { FC } from "react"
import { StyledEm } from "../styles"
import type { ILibText } from "../types"

export const Em: FC<ILibText> = ({
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
        <StyledEm
            data-testid={testid}
            ref={ref}
            as={as}
            $color={color}
            $linkColor={linkColor}
            $textAlign={textAlign}
            {...rest}
        >
            {children}
        </StyledEm>
    )
}
