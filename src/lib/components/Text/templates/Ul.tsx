import type { FC } from "react"
import { StyledUl } from "../styles"
import type { ILibText } from "../types"

export const Ul: FC<ILibText> = ({
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
