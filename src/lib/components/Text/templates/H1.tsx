import type { FC } from "react"
import { StyledH1 } from "../styles"
import type { ILibText } from "../types"

export const H1: FC<ILibText> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    color,
    linkColor,
    textAlign,
    display,
    ...rest
}) => {
    return (
        <StyledH1
            data-testid={testid}
            ref={ref}
            as={as}
            $color={color}
            $linkColor={linkColor}
            $textAlign={textAlign}
            $display={display}
            {...rest}
        >
            {children}
        </StyledH1>
    )
}
